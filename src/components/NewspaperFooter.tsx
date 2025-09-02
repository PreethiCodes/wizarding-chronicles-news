import { Separator } from "@/components/ui/separator";

const NewspaperFooter = () => {
  return (
    <footer className="mt-12 p-6 bg-paper-aged border-t-2 border-ink/20">
      <Separator className="bg-ink/30 mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Publication Info */}
        <div className="text-center md:text-left">
          <h3 className="font-display text-lg font-bold text-ink mb-2">Daily Prophet</h3>
          <p className="newspaper-body text-xs">
            The Wizarding World's most trusted source for magical news since 1743
          </p>
          <p className="newspaper-byline text-xs mt-2">
            Published daily from Diagon Alley, London
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h4 className="font-headline font-bold text-ink mb-2">Contact Us</h4>
          <div className="newspaper-body text-xs space-y-1">
            <p>📮 Owl Post: Daily Prophet, Diagon Alley</p>
            <p>🔥 Floo Network: "Prophet News"</p>
            <p>✨ Magical Telegraph: PROPHET-1743</p>
          </div>
        </div>

        {/* Subscription */}
        <div className="text-center md:text-right">
          <h4 className="font-headline font-bold text-ink mb-2">Subscribe Today</h4>
          <div className="newspaper-body text-xs space-y-1">
            <p>Daily Delivery: 1 Galleon/month</p>
            <p>Sunday Edition: 2 Sickles/week</p>
            <p>🦉 Includes magical delivery by owl</p>
          </div>
        </div>
      </div>

      <Separator className="bg-ink/30 my-6" />
      
      <div className="text-center newspaper-byline text-xs">
        <p>© 1994 Daily Prophet Publications • All Rights Reserved</p>
        <p className="mt-1">
          "All the News That's Fit to Bewitch" • Regulated by the Ministry of Magic Press Office
        </p>
      </div>
    </footer>
  );
};

export default NewspaperFooter;