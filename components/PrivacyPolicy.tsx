import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col justify-between font-sans">
      {/* Simple Header */}
      <header className="w-full bg-[#09090b] border-b border-white/5 py-5 sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 md:gap-3.5 group">
            <img
              src="/logo%20check%20mkt%20navbar.png"
              alt="Check MKT"
              className="h-10 w-auto object-contain origin-left group-hover:scale-105 transition-transform duration-300"
            />
            <div className="font-display font-bold text-xl md:text-2xl leading-none tracking-tight text-white select-none whitespace-nowrap">
              CHECK <span className="text-[#62AE88]">MKT</span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#62AE88] hover:text-[#62AE88] transition-all text-xs font-semibold uppercase tracking-wider bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'pt' ? 'Voltar para Home' : 'Back to Home'}
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-[800px] mx-auto w-full px-6 py-16 md:py-24">
        <div className="space-y-10">
          <div>
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-wider font-semibold">
              PB Melo Enterprises LLC (DBA “CHECK MKT”) &bull; Effective Date: June 10, 2026
            </p>
          </div>

          <hr className="border-white/5" />

          <div className="prose prose-invert max-w-none text-white/70 space-y-8 text-[15px] md:text-[16px] leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">1. Introduction</h2>
              <p>
                PB Melo Enterprises LLC, doing business as CHECK MKT (“we,” “us,” or “our”), operates the website{' '}
                <a href="#" className="text-[#62AE88] hover:underline font-medium">checkmktus.com</a> (the “Site”). 
                We respect your privacy and are committed to protecting the personal information you share with us. 
                This Privacy Policy explains what information we collect, how we use it, and the choices you have.
              </p>
              <p>
                By using our Site or contacting us through our chat widget, you agree to the practices described in this Privacy Policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">2. Information We Collect</h2>
              <p>
                We may collect the following information when you interact with our Site or contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li><strong className="text-white/80">Contact information:</strong> name, email address, phone number, and company name.</li>
                <li><strong className="text-white/80">Inquiry information:</strong> details you provide about your support request or service inquiry.</li>
                <li><strong className="text-white/80">Technical information:</strong> IP address, browser type, device information, and pages visited, collected automatically through cookies and similar technologies.</li>
              </ul>
              <p>
                We only collect information that you voluntarily provide or that is necessary to respond to your inquiry and deliver our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li>Respond to your inquiries and support requests.</li>
                <li>Provide ticket updates, appointment coordination, and follow-up communications related to your inquiry.</li>
                <li>Deliver and manage our services.</li>
                <li>Improve our Site and services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">4. SMS / Text Messaging</h2>
              <p>
                If you provide your mobile phone number through our website chat widget, you consent to receive customer care 
                and service-related text messages from us, including responses to support requests, ticket updates, appointment 
                coordination, and follow-up communications related to an existing inquiry.
              </p>
              <p>
                Message frequency may vary based on your support interactions. Message and data rates may apply. You can reply{' '}
                <strong className="text-white">STOP</strong> at any time to opt out, or reply <strong className="text-white">HELP</strong> for 
                assistance. Opt-out requests are honored immediately.
              </p>
              <div className="border-l-2 border-[#62AE88] bg-white/[0.02] p-5 rounded-r-2xl text-white/80 text-sm italic leading-relaxed">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. 
                Information sharing to subcontractors in support services, such as customer service, is permitted. 
                All other use case categories exclude text messaging originator opt-in data and consent; this information 
                will not be shared with any third parties.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">5. How We Share Your Information</h2>
              <p>We do not sell, rent, or trade your personal information. We may share your information only with:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li>
                  <strong className="text-white/80">Service providers and subcontractors</strong> who help us operate our business 
                  (such as customer service, scheduling, and hosting providers), bound by confidentiality obligations.
                </li>
                <li>
                  <strong className="text-white/80">Legal authorities</strong> when required by law or to protect our rights.
                </li>
              </ul>
              <p>
                As stated above, mobile opt-in data and SMS consent are never shared with third parties for marketing purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">6. Cookies</h2>
              <p>
                Our Site uses cookies and similar technologies to improve your browsing experience and analyze Site traffic. 
                You can control cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">7. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal information. However, 
                no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">8. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal information, 
                or to opt out of certain uses. To exercise these rights, contact us using the details below.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">9. Children’s Privacy</h2>
              <p>
                Our Site and services are not directed to individuals under 18, and we do not knowingly collect information from children.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The “Last Updated” date at the top reflects the most recent changes.
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">11. Contact Us</h2>
              <p>If you have any questions regarding this Privacy Policy or your data, please contact us:</p>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-2 text-white/60">
                <strong className="text-white block text-base">PB Melo Enterprises LLC (DBA CHECK MKT)</strong>
                <p>67 Sea Street, Hyannis, MA 02601</p>
                <p>Phone: <a href="tel:7744466676" className="text-[#62AE88] hover:underline">774 446 6676</a></p>
                <p>Email: <a href="mailto:info@checkmktus.com" className="text-[#62AE88] hover:underline">info@checkmktus.com</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
