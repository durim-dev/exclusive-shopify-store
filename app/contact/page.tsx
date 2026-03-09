import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center py-32 gap-20 bg-white dark:bg-black sm:items-start">
        <div className="space-y-4 w-full text-center">
          <h1 className="text-5xl">How Can We Help?</h1>
          <p className="text-zinc-500">
            Have a question or need assistance? Contact us and let's find a
            solution together!
          </p>
        </div>

        <div className="flex gap-6 border p-6 rounded-lg">
          <div className="flex flex-col gap-4 bg-primary text-white p-8 rounded-lg">
            <p>Contact Information</p>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <div className="flex gap-2 items-center">
              <Phone /> +8801611112222
            </div>
            <div className="flex gap-2 items-center">
              <Mail /> customer@exclusive.com
            </div>
            <div className="flex gap-2 items-center">
              <MapPin /> 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Input type="text" placeholder="Enter your name here" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your email here" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
