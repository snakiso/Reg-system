import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

function App() {
  return (
    <Button>
      <Typography as={"span"} variant={"body2m"}>
        Click
      </Typography>
    </Button>
  );
}

export default App;
