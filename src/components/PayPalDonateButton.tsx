"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal: any;
  }
}

interface PayPalDonateButtonProps {
  hostedButtonId: string;
}

export default function PayPalDonateButton({
  hostedButtonId,
}: PayPalDonateButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load PayPal script
    const existingScript = document.querySelector(
      'script[src*="paypalobjects.com/donate/sdk/donate-sdk.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://www.paypalobjects.com/donate/sdk/donate-sdk.js`;
      script.setAttribute("data-pp-namespace", "paypalDonate");
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.paypal && ref.current) {
          try {
            window.paypal.Donation({
              env: "production",
              hosted_button_id: hostedButtonId,
            }).render(ref.current);
          } catch (error) {
            console.error("PayPal render error:", error);
          }
        }
      };
    } else if (window.paypal && ref.current) {
      // Script already loaded, render immediately
      try {
        window.paypal.Donation({
          env: "production",
          hosted_button_id: hostedButtonId,
        }).render(ref.current);
      } catch (error) {
        console.error("PayPal render error:", error);
      }
    }
  }, [hostedButtonId]);

  return (
    <div
      ref={ref}
      className="min-h-[50px] flex items-center justify-center"
    />
  );
}