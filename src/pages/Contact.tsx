import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(!validateEmail(email));
    // Add submit logic here
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to explore AI solutions for your business or educational needs? Let's discuss your project.
          </p>
        </div>
        <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 shadow-2xl rounded-3xl">
          <CardContent className="p-10">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="rounded-xl h-12 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    aria-invalid={emailError}
                    className="rounded-xl h-12 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {emailError && (
                    <span className="text-red-500 text-sm">Please enter a valid email address.</span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="min-h-32 rounded-xl resize-none bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-14 text-lg rounded-xl shadow-lg shadow-blue-500/25 border-0">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
