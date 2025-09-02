import NewspaperHeader from "@/components/NewspaperHeader";
import MainArticle from "@/components/MainArticle";
import SidebarArticles from "@/components/SidebarArticles";
import NewspaperFooter from "@/components/NewspaperFooter";
import MagicalIntro from "@/components/MagicalIntro";
import BackgroundAudio from "@/components/BackgroundAudio";

const Index = () => {
  return (
    <>
      <MagicalIntro />
      <BackgroundAudio />
      <div className="magical-bg">
        <div className="max-w-7xl mx-auto p-4">
          <NewspaperHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <MainArticle />
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SidebarArticles />
            </div>
          </div>
          <NewspaperFooter />
        </div>
      </div>
    </>
  );
};

export default Index;
