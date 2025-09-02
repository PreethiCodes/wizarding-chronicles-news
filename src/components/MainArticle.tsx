import { Badge } from "@/components/ui/badge";

const MainArticle = () => {
  return (
    <article className="magical-border p-6 mb-8 floating-animation">
      <div className="text-center mb-6">
        <Badge variant="destructive" className="mb-4 text-xs tracking-widest">
          🏰 EXCLUSIVE REPORT
        </Badge>
        
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-ink leading-tight mb-4">
          THE GREAT HALL OPENS ITS DOORS
        </h1>
        
        <h2 className="font-headline text-2xl md:text-3xl text-ink-faded italic mb-6">
          A Night of Enchantment Begins
        </h2>
        
        <div className="newspaper-byline mb-6">
          By Rita Skeeter, Senior Correspondent • Photography by Colin Creevey
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="newspaper-body text-lg space-y-4">
          <p className="font-medium text-xl">
            <span className="float-left text-6xl font-headline leading-none mr-2 mt-1">H</span>
            ogwarts School of Witchcraft and Wizardry opened its magnificent Great Hall last evening for what promises to be the most spectacular magical celebration in decades.
          </p>
          
          <p>
            Students from all four houses gathered beneath the enchanted ceiling, which mirrored the stormy autumn sky outside with remarkable precision. Thousands of floating candles cast a warm, golden glow over the assembled crowd as they awaited the evening's festivities.
          </p>
          
          <p>
            "The atmosphere was absolutely electric," reported sixth-year Ravenclaw Luna Lovegood. "You could practically taste the magic in the air – though that might have been the treacle tart."
          </p>
        </div>
        
        <div className="newspaper-body text-lg space-y-4">
          <p>
            Headmaster Albus Dumbledore, resplendent in midnight-blue robes embroidered with silver stars, welcomed guests with his characteristic warmth and twinkling eyes.
          </p>
          
          <p>
            "Tonight, we celebrate not just the opening of our Great Hall," Dumbledore announced to thunderous applause, "but the opening of minds, hearts, and the endless possibilities that magic brings to our world."
          </p>
          
          <p>
            The evening featured performances by the Hogwarts choir, demonstrations of advanced transfiguration by Professor McGonagall, and a spectacular display of defensive charms courtesy of Professor Flitwick.
          </p>
          
          <div className="bg-paper-aged p-4 border-l-4 border-gold">
            <p className="italic">
              "The Great Hall has never looked more magnificent. Even the ghosts seemed more substantial than usual, as if drawn by the sheer joy of the occasion."
            </p>
            <cite className="text-sm text-ink-faded">— Nearly Headless Nick</cite>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MainArticle;