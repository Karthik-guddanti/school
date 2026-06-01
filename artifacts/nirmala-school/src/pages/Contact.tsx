import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useCreateContactMessage } from "@workspace/api-client-react";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { mutate: submitContactMessage, isPending } = useCreateContactMessage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMessage(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent",
            description: "Thank you! We have received your message and will get back to you shortly.",
          });
          reset();
        },
        onError: (err: any) => {
          toast({
            variant: "destructive",
            title: "Failed to Send Message",
            description: err?.message || "There was a problem submitting your message. Please try again.",
          });
        }
      }
    );
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We would love to hear from you. Reach out to us with any queries or schedule a campus visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="p-8 bg-card rounded-3xl border border-border text-center flex flex-col items-center shadow-sm">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3">Visit Us</h3>
            <p className="text-muted-foreground">Nirmala CBSE School, Atmakur, Mangalagiri, Guntur, Andhra Pradesh</p>
          </div>
          <div className="p-8 bg-card rounded-3xl border border-border text-center flex flex-col items-center shadow-sm">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3">Call Us</h3>
            <p className="text-muted-foreground mb-1">+91 7093929711</p>
            <p className="text-muted-foreground">08645-237237</p>
          </div>
          <div className="p-8 bg-card rounded-3xl border border-border text-center flex flex-col items-center shadow-sm">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3">Email Us</h3>
            <p className="text-muted-foreground break-all">nirmalacbsemgl7@gmail.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Map Embed */}
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-md bg-muted">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15303.442813589278!2d80.5694292!3d16.4258933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f11555555555%3A0xabcdef1234567890!2sAtmakur%2C%20Mangalagiri%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nirmala School Location"
            ></iframe>
          </div>

          {/* Form */}
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-xl">
            <h3 className="font-serif text-3xl font-bold mb-2">Send us a Message</h3>
            <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you promptly.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input {...register("fullName", { required: "Full name is required" })} placeholder="Enter your name" className="bg-background rounded-xl h-12" />
                  {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })} placeholder="Enter your email" className="bg-background rounded-xl h-12" />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input type="tel" {...register("phone", { required: "Phone number is required" })} placeholder="Enter your phone number" className="bg-background rounded-xl h-12" />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea {...register("message", { required: "Message is required" })} placeholder="How can we help you?" className="bg-background min-h-[150px] rounded-xl" />
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>
              <Button type="submit" disabled={isPending} className="w-full h-14 rounded-full text-base font-semibold shadow-md hover:shadow-lg">
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}