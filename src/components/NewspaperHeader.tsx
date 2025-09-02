import { Separator } from "@/components/ui/separator";

const NewspaperHeader = () => {
  return (
    <header className="magical-border p-8 mb-8">
      <div className="text-center">
        {/* Publication Info */}
        <div className="newspaper-subheading text-xs mb-2">
          WIZARD EDITION • ESTABLISHED 1743 • PRICE: 5 KNUTS
        </div>
        
        {/* Main Title */}
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-ink mb-4 tracking-wider">
          DAILY PROPHET
        </h1>
        
        {/* Date and Weather */}
        <div className="flex justify-between items-center newspaper-subheading text-sm mb-4">
          <div>MONDAY, OCTOBER 31ST, 1994</div>
          <div className="sparkle-effect">MAGICAL WEATHER: ⚡ STORMY WITH CHANCE OF FLYING LETTERS</div>
          <div>EDITION No. 27,394</div>
        </div>
        
        <Separator className="bg-ink/30" />
        
        {/* Secondary Headlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs newspaper-subheading">
          <div>QUIDDITCH SCORES • MINISTRY NEWS • HOGSMEADE HAPPENINGS</div>
          <div className="font-medium">THE WIZARDING WORLD'S MOST TRUSTED NEWSPAPER</div>
          <div>CLASSIFIED ADS • MAGICAL CREATURES • SPELL REVIEWS</div>
        </div>
      </div>
    </header>
  );
};

export default NewspaperHeader;