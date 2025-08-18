import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const FigmaDev: React.FC = () => {
  const [url, setUrl] = useState("");
  const [embedVisible, setEmbedVisible] = useState(false);

  useEffect(() => {
    const lastUrl = localStorage.getItem("figmaShareUrl");
    if (lastUrl) setUrl(lastUrl);
  }, []);

  const handleOpenDesign = () => {
    if (url) window.open(url, "_blank", "noopener");
  };
  const handleOpenDevMode = () => {
    if (url) window.open(url + "?mode=dev", "_blank", "noopener");
  };
  const handleEmbed = () => {
    setEmbedVisible((v) => !v);
  };
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    localStorage.setItem("figmaShareUrl", e.target.value);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">Figma Dev Mode</h2>
        <input
          type="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="Paste Figma share URL..."
          className="w-full mb-4 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder:text-gray-400"
        />
        <div className="flex gap-4 mb-4">
          <Button type="button" onClick={handleOpenDesign} className="bg-blue-500">Open Design</Button>
          <Button type="button" onClick={handleOpenDevMode} className="bg-purple-500">Open Dev Mode</Button>
          <Button type="button" aria-expanded={embedVisible} onClick={handleEmbed} className="bg-gray-700">
            {embedVisible ? "Hide Embed" : "Embed Below"}
          </Button>
        </div>
        {embedVisible && url && (
          <iframe
            src={url}
            title="Figma Embed"
            className="w-full h-96 rounded-xl border border-gray-700"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
};
