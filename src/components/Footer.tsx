import { Button } from '@/components/ui/button';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">AI Interview Prep</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering developers with AI-powered interview preparation. 
              Master your technical skills and land your dream job.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-primary/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Practice Tests</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mock Interviews</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Coding Challenges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Progress Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AI Interview Prep. All rights reserved. Built with ❤️ for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;