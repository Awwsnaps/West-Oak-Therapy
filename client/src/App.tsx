import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import GroundedSanctuary from "@/pages/grounded-sanctuary";
import NarrativeSanctuary from "@/pages/narrative-sanctuary";
import MirrorExperience from "@/pages/mirror-experience";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/grounded" component={GroundedSanctuary} />
      <Route path="/narrative" component={NarrativeSanctuary} />
      <Route path="/mirror" component={MirrorExperience} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
