import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

const TermsOfUse: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-wider font-semibold">
              PB Melo Enterprises LLC (DBA “CHECK MKT”) &bull; Effective Date: June 10, 2026
            </p>
          </div>

          <hr className="border-white/5" />

          <div className="prose prose-invert max-w-none text-white/70 space-y-8 text-[15px] md:text-[16px] leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">1. Agreement</h2>
              <p>
                These Terms of Service (“Terms”) govern your use of the website{' '}
                <a href="#" className="text-[#62AE88] hover:underline font-medium">checkmktus.com</a> and the services 
                provided by PB Melo Enterprises LLC, doing business as CHECK MKT (“we,” “us,” or “our”). 
                By using our Site or services, you agree to these Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">2. Our Services</h2>
              <p>
                CHECK MKT provides cinematic video production and marketing services for construction and real estate companies. 
                Specific deliverables, timelines, and pricing are defined in individual agreements or proposals.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">3. SMS / Text Messaging Terms</h2>
              <p>By providing your mobile phone number through our website chat widget, you agree to the following:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li><strong className="text-white/80">Business name:</strong> Messages are sent by PB Melo Enterprises LLC (DBA CHECK MKT).</li>
                <li>
                  <strong className="text-white/80">Messages you can expect:</strong> You may receive customer care and service-related 
                  messages, including responses to support requests, ticket updates, appointment coordination, and follow-up 
                  communications related to an existing inquiry. Messaging is limited to customer care purposes.
                </li>
                <li>
                  <strong className="text-white/80">Message frequency and rates:</strong> Message frequency may vary based on your 
                  support interactions. Message and data rates may apply.
                </li>
                <li>
                  <strong className="text-white/80">HELP:</strong> For assistance, reply <strong className="text-white">HELP</strong> to 
                  any message, or contact us at <a href="mailto:info@checkmktus.com" className="text-[#62AE88] hover:underline">info@checkmktus.com</a> or <a href="tel:7744466676" className="text-[#62AE88] hover:underline">(774) 446-6676</a>.
                </li>
                <li>
                  <strong className="text-white/80">STOP:</strong> To stop receiving messages, reply <strong className="text-white">STOP</strong> to 
                  any message from <a href="tel:7744466676" className="text-[#62AE88] hover:underline">(774) 446-6676</a>. You will receive a 
                  confirmation and no further messages unless you opt in again. Opt-out requests are honored immediately.
                </li>
                <li><strong className="text-white/80">Carrier liability:</strong> Carriers are not liable for delayed or undelivered messages.</li>
              </ul>
              <div className="border-l-2 border-[#62AE88] bg-white/[0.02] p-5 rounded-r-2xl text-white/80 text-sm italic leading-relaxed my-6">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. 
                Information sharing to subcontractors in support services, such as customer service, is permitted. 
                All other use case categories exclude text messaging originator opt-in data and consent; this information 
                will not be shared with any third parties.
              </div>
              <p>
                If you have any questions regarding privacy, please read our privacy policy:{' '}
                <a href="#privacy" className="text-[#62AE88] hover:underline font-medium">checkmktus.com/privacy-policy</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">4. User Responsibilities</h2>
              <p>
                You agree to provide accurate information and to use our Site and services only for lawful purposes. 
                You may not use our Site to transmit harmful, fraudulent, or unlawful content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">5. Intellectual Property</h2>
              <p>
                All content on our Site, including videos, images, text, and branding, is owned by or licensed to CHECK MKT 
                and may not be used without our written permission. Ownership of project deliverables is defined in individual 
                client agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">6. Payment</h2>
              <p>
                Payment terms for services are specified in individual agreements or invoices. Fees are due as stated in those documents.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, CHECK MKT is not liable for any indirect, incidental, or consequential 
                damages arising from your use of our Site or services. Our total liability is limited to the amount you paid 
                for the specific service in question.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">8. Disclaimer of Warranties</h2>
              <p>
                Our Site and services are provided “as is” without warranties of any kind, express or implied, except as required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">9. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The “Last Updated” date reflects the most recent changes. 
                Continued use of our Site or services constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Massachusetts, without regard to conflict of law principles.
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">11. Contact Us</h2>
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

export default TermsOfUse;
