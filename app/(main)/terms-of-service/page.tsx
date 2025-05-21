import Link from 'next/link';
import React from 'react';

/**
 * Terms of Service Page Component
 * Displays the terms of service for ChataBubble.
 */
const TermsOfServicePage = () => {
  // Set the effective date and company name/identifier
  const effectiveDate = "April 30, 2025"; // Today's Date
  const companyName = "the ChataBubble team"; // Identifier for the provider
  const contactEmail = "help@chatabubble.com"; // Contact email
  const noticePeriodDays = 30; // Notice period for material changes

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose lg:prose-lg">
      {/* Page Title */}
      <h1>Terms of Service for ChataBubble</h1>
      <p className="lead italic">Effective Date: {effectiveDate}</p>

      {/* Initial Agreement Statement */}
      <p className="font-semibold">
        PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING THE CHATABUBBLE MOBILE APPLICATION (THE &quot;APP&quot;), YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS AND ALL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT USE THE APP.
      </p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the ChataBubble mobile application and any related services (collectively, the &quot;Service&quot;) provided by {companyName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
      </p>

      {/* Section 1: Agreement to Terms */}
      <h2>1. Agreement to Terms</h2>
      <p>
        By creating an account or using the Service, you agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference (<Link href="/privacy-policy" className="text-blue-600 hover:underline">view Privacy Policy</Link>). If you do not agree to these Terms or the Privacy Policy, you may not access or use the Service.
      </p>
      <p>
        We reserve the right to modify these Terms at any time. We will notify you of any changes by updating the &quot;Effective Date&quot; at the top of these Terms. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
      </p>

      {/* Section 2: The Service */}
      <h2>2. The Service</h2>
      <p>
        ChataBubble is a language learning application that allows users to practice conversational skills through interactive chat scenarios with an AI language partner. The Service includes features such as:
      </p>
      <ul>
        <li>User account creation and management.</li>
        <li>Selection of predefined or user-created language learning scenarios.</li>
        <li>Interactive chat sessions with an AI assistant powered by third-party services (e.g., OpenAI).</li>
        <li>Translation of chat messages.</li>
        <li>Tracking of usage metrics and learning progress.</li>
      </ul>

      {/* Section 3: User Accounts */}
      <h2>3. User Accounts</h2>
      <p><strong>Registration:</strong> To use certain features of the Service, you must register for an account. You may register using an email address and password or through third-party services like Apple Sign-In. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
      <p><strong>Account Security:</strong> You are responsible for safeguarding your account credentials (password) and for any activities or actions under your account, whether or not you have authorized such activities or actions. You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage arising from your failure to comply with the above requirements.</p>
      <p><strong>Eligibility:</strong> You must be at least 13 years old (or the age of digital consent in your jurisdiction) to use the Service.</p>

      {/* Section 4: User Content and Conduct */}
      <h2>4. User Content and Conduct</h2>
      <p><strong>Your Content:</strong> You may create content within the Service, such as chat messages you send and custom scenarios you design (&quot;User Content&quot;).</p>
      <p><strong>Chat Messages:</strong> The messages you exchange within the App are processed by us and our third-party AI provider (OpenAI) to provide the chat functionality and translations. As detailed in our Privacy Policy, your message content is encrypted on your device before storage, although the current encryption method has limitations. You are responsible for the content of your messages.</p>
      <p><strong>Custom Scenarios:</strong> If you create custom scenarios, you retain ownership of the content you create. However, by creating a custom scenario, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such scenario content solely for the purpose of operating, developing, providing, and improving the Service.</p>
      <p><strong>Prohibited Conduct:</strong> You agree not to use the Service to:</p>
      <ul>
        <li>Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another&apos;s privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
        <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
        <li>Transmit any unsolicited or unauthorized advertising, promotional materials, &quot;junk mail,&quot; &quot;spam,&quot; &quot;chain letters,&quot; &quot;pyramid schemes,&quot; or any other form of solicitation.</li>
        <li>Transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment.</li>
        <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
        <li>Violate any applicable local, state, national, or international law.</li>
        <li>Attempt to reverse engineer, decompile, or otherwise attempt to discover the source code of the App.</li>
      </ul>
      <p><strong>Usage Limits:</strong> We may impose limits on your use of the Service, such as daily message limits, particularly for free tiers of service, to manage operational costs and ensure fair usage.</p>

      {/* Section 5: License to Use the App */}
      <h2>5. License to Use the App</h2>
      <p>
        Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to download and install a copy of the App on a mobile device that you own or control and to run such copy of the App solely for your own personal, non-commercial purposes.
      </p>

      {/* Section 6: Third-Party Services */}
      <h2>6. Third-Party Services</h2>
      <p>
        The Service relies on third-party services, including:
      </p>
      <ul>
        <li><strong>Supabase:</strong> For backend infrastructure, database storage, and authentication.</li>
        <li><strong>OpenAI:</strong> For providing AI chat responses and translation capabilities. Your interactions and message content will be processed by OpenAI according to their terms and privacy policies.</li>
        <li><strong>Apple:</strong> For authentication via Apple Sign-In.</li>
      </ul>
      <p>
        Your use of these third-party services may be subject to their respective terms and conditions and privacy policies. We are not responsible for the practices of these third parties.
      </p>

      {/* Section 7: Intellectual Property */}
      <h2>7. Intellectual Property</h2>
      <p>
        The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of {companyName} and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
      </p>

      {/* Section 8: Disclaimers and Limitation of Liability */}
      <h2>8. Disclaimers and Limitation of Liability</h2>
      <p><strong>&quot;AS IS&quot; Basis:</strong> THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
      <p><strong>AI Accuracy:</strong> THE AI RESPONSES AND TRANSLATIONS PROVIDED WITHIN THE APP ARE GENERATED BY AUTOMATED SYSTEMS (OPENAI) AND MAY CONTAIN INACCURACIES, ERRORS, OR BIASES. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY AI-GENERATED CONTENT OR TRANSLATIONS. THE SERVICE IS INTENDED FOR LANGUAGE PRACTICE AND SHOULD NOT BE RELIED UPON FOR CRITICAL COMMUNICATION OR FACTUAL ACCURACY.</p>
      <p><strong>Security:</strong> WHILE WE IMPLEMENT SECURITY MEASURES AS DETAILED IN OUR PRIVACY POLICY (INCLUDING MESSAGE ENCRYPTION), WE CANNOT GUARANTEE ABSOLUTE SECURITY. THE CURRENT ENCRYPTION METHOD IS KNOWN TO BE WEAK, AND THE SECURITY OF YOUR ENCRYPTED DATA ULTIMATELY DEPENDS ON THE SECURITY OF THE ENCRYPTION KEY STORED ON YOUR DEVICE.</p>
      <p><strong>Availability:</strong> We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.</p>
      <p><strong>Limitation of Liability:</strong> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {companyName}, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.</p>

      {/* Section 9: Indemnification */}
      <h2>9. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless the ChataBubble team and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password, or b) a breach of these Terms.
      </p>

      {/* Section 10: Term and Termination */}
      <h2>10. Term and Termination</h2>
      <p><strong>Term:</strong> These Terms will remain in full force and effect while you use the Service.</p>
      <p><strong>Termination by You:</strong> You may terminate your account at any time by using the account deletion feature within the App&apos;s profile settings.</p>
      <p><strong>Termination by Us:</strong> We may suspend or terminate your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
      <p><strong>Effect of Termination:</strong> Upon termination, your right to use the Service will immediately cease. Provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability. Account termination includes data deletion as described in our Privacy Policy.</p>

      {/* Section 11: Governing Law and Dispute Resolution */}
      <h2>11. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
      </p>
      <p>
        You agree to resolve any disputes arising out of or relating to these Terms or the Service through informal negotiation first. If negotiation fails, any legal suit, action, or proceeding arising out of or related to these Terms or the Service shall be instituted exclusively in the courts of England and Wales, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
      </p>

      {/* Section 12: Changes to Terms */}
      <h2>12. Changes to Terms</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least {noticePeriodDays} days&apos; notice prior to any new terms taking effect, likely by updating the Effective Date and potentially through an in-app notification. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
      </p>

      {/* Section 13: Miscellaneous */}
      <h2>13. Miscellaneous</h2>
      <p><strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
      <p><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding the Service.</p>
      <p><strong>No Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>

      {/* Section 14: Contact Information */}
      <h2>14. Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>
      </p>

    </div>
  );
};

// Export the component
export default TermsOfServicePage;
