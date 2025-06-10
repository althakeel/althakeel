import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/common/header-privacy';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet';


const TermsCondition = () => {
  const { language } = useLanguage(); // 'en' or 'ar'
  const isRTL = language === 'ar';

  const pageStyle = {
    width: '100%',
    minHeight: '100vh',
    marginTop: '7rem',
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

  const listStyle = {
    paddingLeft: isRTL ? '0' : '20px',
    paddingRight: isRTL ? '20px' : '0',
    marginBottom: '16px',
    listStylePosition: 'inside',
  };

  const content = {
    en: {
      title: 'Terms and Conditions',
      updated: 'Last Updated: May 26, 2025',
      intro: 'Welcome to Al Thakeel. By using our website, you agree to the terms listed below. If you do not agree, please do not use our services.',
      sections: [
        {
          title: '1. About Al Thakeel',
          text: 'Al Thakeel is a cooperative company based in Dubai, UAE, offering reliable services to members and clients with integrity.',
        },
        {
          title: '2. Website Usage',
          list: [
            'Users must be 18 years or older.',
            'Use our website in a legal and respectful manner.',
            'Do not attempt to disrupt or misuse our services.',
          ],
        },
        {
          title: '3. Intellectual Property',
          text: 'All content, logos, and designs on this site are the property of Al Thakeel. Unauthorized use is prohibited.',
        },
        {
          title: '4. Privacy Policy',
          text: 'Your privacy is important to us. Please review our Privacy Policy to learn how your information is used and protected.',
        },
        {
          title: '5. Services & Membership',
          text: 'Some services require membership or payment. We reserve the right to update, suspend, or discontinue any feature or service.',
        },
        {
          title: '6. Limitation of Liability',
          text: 'Al Thakeel shall not be held liable for indirect, incidental, or consequential damages arising from the use of our website or services.',
        },
        {
          title: '7. Third-Party Links',
          text: 'We may include links to third-party websites. Al Thakeel is not responsible for their content or privacy practices.',
        },
        {
          title: '8. Modifications to Terms',
          text: 'We may revise these terms at any time. Continued use of our website signifies your acceptance of the updated terms.',
        },
        {
          title: '9. Governing Law',
          text: 'These terms are governed by the laws of the UAE. All disputes will be handled by the courts in Dubai.',
        },
      ],
      conclusion: 'If you have any questions, feel free to contact us through our official support channels.',
    },
    ar: {
      title: 'الشروط والأحكام',
      updated: 'آخر تحديث: ٢٦ مايو ٢٠٢٥',
      intro: 'مرحبًا بك في الثكيل. باستخدامك لهذا الموقع، فإنك توافق على الشروط التالية. إذا لم توافق، يُرجى عدم استخدام خدماتنا.',
      sections: [
        {
          title: '١. عن الثكيل',
          text: 'الثكيل هي شركة تعاونية مقرها دبي، الإمارات العربية المتحدة، تقدم خدمات موثوقة للأعضاء والعملاء بكل نزاهة.',
        },
        {
          title: '٢. استخدام الموقع',
          list: [
            'يجب أن يكون عمر المستخدم 18 عامًا أو أكثر.',
            'استخدم الموقع بطريقة قانونية ومحترمة.',
            'لا تحاول تعطيل أو إساءة استخدام خدماتنا.',
          ],
        },
        {
          title: '٣. الملكية الفكرية',
          text: 'جميع المحتويات والشعارات والتصاميم على هذا الموقع مملوكة لشركة الثكيل. يُمنع استخدامها دون إذن.',
        },
        {
          title: '٤. سياسة الخصوصية',
          text: 'نولي خصوصيتك أهمية بالغة. يرجى مراجعة سياسة الخصوصية الخاصة بنا لمعرفة كيفية استخدام معلوماتك وحمايتها.',
        },
        {
          title: '٥. الخدمات والعضوية',
          text: 'تتطلب بعض الخدمات عضوية أو دفعًا. نحتفظ بالحق في تحديث أو تعليق أو إيقاف أي خدمة أو ميزة.',
        },
        {
          title: '٦. تحديد المسؤولية',
          text: 'لا تتحمل الثكيل أي مسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية الناتجة عن استخدامك للموقع أو الخدمات.',
        },
        {
          title: '٧. روابط الجهات الخارجية',
          text: 'قد يتضمن موقعنا روابط لمواقع تابعة لجهات خارجية. لسنا مسؤولين عن محتواها أو ممارسات الخصوصية الخاصة بها.',
        },
        {
          title: '٨. تعديل الشروط',
          text: 'قد نقوم بمراجعة هذه الشروط في أي وقت. استمرار استخدامك للموقع يعني قبولك للشروط المحدثة.',
        },
        {
          title: '٩. القانون المعمول به',
          text: 'تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة. سيتم النظر في جميع النزاعات من قبل محاكم دبي.',
        },
      ],
      conclusion: 'إذا كانت لديك أي أسئلة، فلا تتردد في التواصل معنا عبر قنوات الدعم الرسمية.',
    },
  };

  const langContent = content[language];

  return (
    <div style={pageStyle}>
       <Helmet>
        <title>{langContent.metaTitle}</title>
        <meta name="description" content={langContent.metaDescription} />
        <link rel="canonical" href="https://www.althakeel.com/Terms&Condition" />
      </Helmet>
      <Header />
      <div style={containerStyle}>
        <h1 style={headingStyle}>{langContent.title}</h1>
        <p style={paragraphStyle}><strong>{langContent.updated}</strong></p>
        <p style={paragraphStyle}>{langContent.intro}</p>

        {langContent.sections.map((section, index) => (
          <div key={index}>
            <h2 style={sectionTitle}>{section.title}</h2>
            {section.text && <p style={paragraphStyle}>{section.text}</p>}
            {section.list && (
              <ul style={listStyle}>
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <p style={paragraphStyle}>{langContent.conclusion}</p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsCondition;
