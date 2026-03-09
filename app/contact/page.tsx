import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col py-32 gap-20 bg-white dark:bg-black items-center">
        <div className="space-y-4 w-full text-center">
          <h1 className="text-5xl">How Can We Help?</h1>
          <p className="text-zinc-500">
            Have a question or need assistance? Contact us and let's find a
            solution together!
          </p>
        </div>

        <div className="flex gap-6 border p-6 rounded-lg w-full max-w-6xl">
          <div className="flex flex-col gap-8 bg-primary text-white p-8 rounded-lg max-w-1/3">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">Contact Information</p>
              <p>Fill out our form and we will contact you within 24 hours.</p>
            </div>
            <div className="flex flex-col gap-4 h-full justify-evenly">
              <div className="flex gap-4 items-center">
                <Phone />
                <p>+8801611112222</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail /> <p>customer@exclusive.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <MapPin size="30" />{" "}
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 w-full flex-1">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name">Name</label>
                <Input type="text" placeholder="Enter your name here" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email">Email</label>
                <Input type="email" placeholder="Enter your email here" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <Input id="subject" placeholder="Enter the subject here" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <Textarea
                id="message"
                placeholder="Enter your message here"
                className="max-h-50 h-22.5"
              />
            </div>
            <Button className="max-w-48 p-5 cursor-pointer">
              Send Message
              <Send />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
