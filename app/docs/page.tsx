import HeroSection from "@/components/docs/HeroSection";
import WhatIsMemstalker from "@/components/docs/WhatIsMemstalker";
import HowItWorks from "@/components/docs/HowItWorks";
import GettingStarted from "@/components/docs/GettingStarted";
import ConnectClaude from "@/components/docs/ConnectClaude";
import ConnectCodexGemini from "@/components/docs/ConnectCodexGemini";
import ConnectChatGPT from "@/components/docs/ConnectChatGPT";
import MCPToolsReference from "@/components/docs/MCPToolsReference";
import RestAPI from "@/components/docs/RestAPI";
import CLIReference from "@/components/docs/CLIReference";
import FileTypes from "@/components/docs/FileTypes";

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      <HeroSection />
      <WhatIsMemstalker />
      <HowItWorks />
      <GettingStarted />
      <ConnectClaude />
      <ConnectCodexGemini />
      <ConnectChatGPT />
      <MCPToolsReference />
      <RestAPI />
      <CLIReference />
      <FileTypes />
    </div>
  );
}
