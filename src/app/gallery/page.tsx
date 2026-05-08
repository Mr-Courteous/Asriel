import ProjectGallery from "@/components/ProjectGallery";

export const metadata = {
  title: "Gallery | Asriel Foundations",
  description: "A visual journey of our impact in the community.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <ProjectGallery />
    </div>
  );
}
