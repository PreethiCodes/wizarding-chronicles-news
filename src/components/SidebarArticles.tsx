import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SidebarArticles = () => {
  return (
    <aside className="space-y-6">
      {/* Breaking News */}
      <Card className="magical-border">
        <CardHeader className="pb-3">
          <Badge variant="destructive" className="w-fit mb-2">⚡ BREAKING</Badge>
          <CardTitle className="newspaper-heading text-xl">
            Triwizard Tournament Champions Selected
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="newspaper-body text-sm">
            The Goblet of Fire has chosen its champions in a shocking turn of events. An unexpected fourth name emerged from the ancient artifact...
          </p>
          <p className="newspaper-byline mt-2">— Sports Desk</p>
        </CardContent>
      </Card>

      {/* Ministry News */}
      <Card className="magical-border">
        <CardHeader className="pb-3">
          <CardTitle className="newspaper-heading text-lg">
            Ministry Issues New Magical Creature Regulations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="newspaper-body text-sm">
            The Department for Regulation and Control of Magical Creatures announced sweeping changes to dragon breeding permits...
          </p>
          <p className="newspaper-byline mt-2">— Ministry Correspondent</p>
        </CardContent>
      </Card>

      {/* Quidditch Scores */}
      <Card className="bg-paper-aged border-gold border-2">
        <CardHeader className="pb-3">
          <CardTitle className="newspaper-heading text-lg">
            🏆 Quidditch Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between newspaper-body text-sm">
            <span>Chudley Cannons</span>
            <span className="font-bold">150</span>
          </div>
          <div className="flex justify-between newspaper-body text-sm">
            <span>Puddlemere United</span>
            <span className="font-bold">140</span>
          </div>
          <p className="newspaper-byline">Seeker catch by Murphy at 67 minutes</p>
        </CardContent>
      </Card>

      {/* Weather */}
      <Card className="magical-border">
        <CardHeader className="pb-3">
          <CardTitle className="newspaper-heading text-lg">
            🌙 Magical Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="newspaper-body text-sm space-y-2">
            <p><strong>Tonight:</strong> Cloudy with scattered pixie dust</p>
            <p><strong>Tomorrow:</strong> Bright with flying carpets at low altitude</p>
            <p><strong>Weekend:</strong> Possible dragon sightings in the north</p>
          </div>
        </CardContent>
      </Card>

      {/* Classified */}
      <Card className="bg-magic-purple/10 border-magic-purple border">
        <CardHeader className="pb-3">
          <CardTitle className="newspaper-heading text-lg text-magic-purple">
            ✨ Classified Advertisements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border-b border-magic-purple/20 pb-2">
            <p className="font-medium text-sm">LOST: One Remembrall</p>
            <p className="text-xs text-ink-faded">If found, please return to Neville Longbottom, Gryffindor Tower</p>
          </div>
          <div className="border-b border-magic-purple/20 pb-2">
            <p className="font-medium text-sm">FOR SALE: Flying Ford Anglia</p>
            <p className="text-xs text-ink-faded">Slightly used. May require some tree removal. Contact R. Weasley</p>
          </div>
          <div>
            <p className="font-medium text-sm">WANTED: Potions Tutor</p>
            <p className="text-xs text-ink-faded">Desperate Gryffindor seeks help. Payment in Chocolate Frogs</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default SidebarArticles;