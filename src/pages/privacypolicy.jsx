import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/common/header-privacy';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage(); // 'en' or 'ar'
  const isRTL = language === 'ar';

  const pageStyle = {
    width: '100%',
    minHeight: '100vh',
    marginTop: '100px',
    backgroundColor: '#f4fafa',
    fontFamily: 'Arial, sans-serif',
    color: '#1c2b2b',
    paddingTop: '20px',
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: isRTL ? 'right' : 'left',
  };

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '30px 20px',
    marginTop: '2rem',
    marginBottom: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: '#014d4d',
    borderBottom: '3px solid #014d4d',
    paddingBottom: '10px',
  };

  const sectionTitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#014040',
  };

  const paragraphStyle = {
    marginBottom: '16px',
    fontSize: '15.5px',
    lineHeight: '1.8',
  };

  const content = {
    en: {
      updated: 'Last Updated: May 26, 2025',
      intro: 'At Al Thakeel, your privacy is a top priority. This Privacy Policy describes how we collect, use, and safeguard your personal information when you interact with our website and services.',
      sections: [
        {
          title: '1. Information We Collect',
          text: 'We may collect personal information that you voluntarily provide to us, including your name, email address, phone number, and any other data submitted through our website, forms, or customer support interactions.',
        },
        {
          title: '2. How We Use Your Information',
          text: 'We use your personal information to:',
          list: [
            'Deliver and maintain our services',
            'Respond to inquiries and customer service requests',
            'Send you updates, offers, or relevant notifications',
            'Improve our website and user experience',
            'Comply with legal and regulatory obligations',
          ],
        },
        {
          title: '3. Data Security',
          text: 'We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, misuse, or alteration. However, no system can guarantee absolute security.',
        },
        {
          title: '4. Use of Cookies',
          text: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze traffic, and deliver personalized content. You may choose to disable cookies in your browser settings.',
        },
        {
          title: '5. Sharing of Information',
          text: 'We do not sell or rent your personal data. We may share your information with trusted third-party service providers who assist us in operating our business, under strict confidentiality obligations. We may also disclose information when required by law or regulatory authorities.',
        },
        {
          title: '6. Third-Party Links',
          text: 'Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices of those websites. We encourage you to read their privacy policies separately.',
        },
        {
          title: '7. Your Rights',
          text: 'Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the use of your personal data. To exercise these rights, please contact us through our support channels.',
        },
        {
          title: '8. Retention of Information',
          text: 'We retain your personal data only as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws.',
        },
        {
          title: '9. Policy Updates',
          text: 'We may update this Privacy Policy periodically. Any changes will be posted on this page with a new effective date. We encourage you to review this policy regularly to stay informed.',
        },
        {
          title: '10. Contact Us',
          text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at: support@althakeel.com or through our official communication channels.',
        },
      ],
    },
    ar: {
      updated: 'آخر تحديث: ٢٦ مايو ٢٠٢٥',
      intro: 'في الثكيل، خصوصيتك هي من أولوياتنا القصوى. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك الشخصية واستخدامها وحمايتها عند تفاعلك مع موقعنا وخدماتنا.',
      sections: [
        {
          title: '١. المعلومات التي نجمعها',
          text: 'قد نجمع معلومات شخصية تقدمها لنا طوعًا، مثل اسمك، بريدك الإلكتروني، رقم هاتفك، وأي بيانات أخرى تقدمها عبر موقعنا أو نماذج الاتصال أو الدعم.',
        },
        {
          title: '٢. كيفية استخدام معلوماتك',
          text: 'نستخدم معلوماتك الشخصية من أجل:',
          list: [
            'تقديم وصيانة خدماتنا',
            'الرد على الاستفسارات وطلبات الدعم',
            'إرسال التحديثات والعروض والإشعارات ذات الصلة',
            'تحسين موقعنا وتجربة المستخدم',
            'الامتثال للمتطلبات القانونية والتنظيمية',
          ],
        },
        {
          title: '٣. أمان البيانات',
          text: 'نطبق تدابير فنية وتنظيمية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو الفقد أو الإساءة أو التعديل. ومع ذلك، لا يمكن لأي نظام ضمان الأمان التام.',
        },
        {
          title: '٤. استخدام ملفات تعريف الارتباط',
          text: 'نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربة التصفح، وتحليل الزيارات، وتقديم محتوى مخصص. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات المتصفح.',
        },
        {
          title: '٥. مشاركة المعلومات',
          text: 'نحن لا نبيع أو نؤجر بياناتك الشخصية. قد نشارك المعلومات مع مزودي خدمات موثوقين يساعدوننا في تشغيل أعمالنا، وذلك بموجب التزامات سرية صارمة. كما قد نفصح عن البيانات إذا طُلب منا ذلك قانونيًا.',
        },
        {
          title: '٦. روابط الجهات الخارجية',
          text: 'قد يحتوي موقعنا على روابط لمواقع أو خدمات تابعة لأطراف ثالثة. لسنا مسؤولين عن سياسات الخصوصية الخاصة بها. نوصي بمراجعة سياساتهم بشكل منفصل.',
        },
        {
          title: '٧. حقوقك',
          text: 'بناءً على موقعك الجغرافي، قد تكون لك حقوق في الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد استخدامها. لممارسة هذه الحقوق، يرجى التواصل معنا عبر قنوات الدعم.',
        },
        {
          title: '٨. الاحتفاظ بالمعلومات',
          text: 'نحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضروريًا لتحقيق الأغراض التي جُمعت من أجلها أو حسب ما تقتضيه القوانين المعمول بها.',
        },
        {
          title: '٩. تحديثات السياسة',
          text: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ سريان جديد. نوصيك بمراجعتها دوريًا.',
        },
        {
          title: '١٠. اتصل بنا',
          text: 'إذا كانت لديك أي أسئلة أو مخاوف بخصوص سياسة الخصوصية أو بياناتك، يرجى التواصل معنا عبر البريد الإلكتروني: support@althakeel.com أو من خلال القنوات الرسمية.',
        },
      ],
    },
  };

  const langContent = content[language];

  return (
    <div style={pageStyle}>
      <Header />
      <div style={containerStyle}>
        <h1 style={headingStyle}>{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
        <p style={paragraphStyle}><strong>{langContent.updated}</strong></p>
        <p style={paragraphStyle}>{langContent.intro}</p>

        {langContent.sections.map((sec, idx) => (
          <div key={idx}>
            <h2 style={sectionTitle}>{sec.title}</h2>
            <p style={paragraphStyle}>{sec.text}</p>
            {sec.list && (
              <ul style={{
                ...paragraphStyle,
                paddingLeft: isRTL ? '0' : '20px',
                paddingRight: isRTL ? '20px' : '0',
                listStylePosition: 'inside',
              }}>
                {sec.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
