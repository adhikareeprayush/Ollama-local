import { useState } from "react";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    // Add user message to chat history
    setMessages((prev) => [...prev, { sender: "user", text: prompt }]);
    setPrompt("");

    try {
      const response = await fetch("http://localhost:5000/api/ollama/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log(data);

      // Add bot response (HTML formatted) to chat history
      setMessages((prev) => [...prev, { sender: "bot", text: data }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="h-screen bg-[#121212] flex flex-col text-white p-4">
      <div className="h-[80vh] overflow-y-auto flex flex-col gap-4 p-4 bg-[#1e1e1e] rounded-md shadow-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs text-sm ${
              msg.sender === "user"
                ? "bg-blue-500 self-end"
                : "bg-gray-700 self-start"
            }`}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="text"
          name="prompt"
          placeholder="Type a message..."
          value={prompt}
          className="flex-1 border border-gray-600 bg-[#181818] rounded-md px-4 py-2 text-white"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default App;