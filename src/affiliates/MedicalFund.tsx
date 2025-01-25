const MedicalFund: React.FC = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold text-blue-600 mb-6">Medical Fund of Siri Guru Singh Sabha</h1>
    
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Establishment</h2>
      <p className="text-lg text-gray-700">
        The Medical Fund was established as an “Endowment Fund” under Clause 2 (c) of the then Sabha Constitution, 
        “To promote religious, cultural, educational, medical, physical, and intellectual advancement of the Sikhs.” 
        It was initiated on the birth anniversary of Siri Guru Nanak Dev Ji on 29th November 1993, formally launched at Vaisakhi 1994, 
        and became operative from 1st August 1994. The fund started with a subscribed capital of Kshs 4.1 million in April 1994.
      </p>
    </section>
    
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Objectives</h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Encourage every Sabha member to subscribe to the Medical Fund.</li>
        <li>Provide medical information, education, and communication to Sabha members.</li>
        <li>Offer healthcare for members as governed by its Constitution and Bylaws.</li>
        <li>Collaborate with health institutions, professionals, and organizations with similar objectives.</li>
        <li>Establish and manage health institutions for its members.</li>
      </ul>
    </section>
    
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Member Benefits</h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Maximum medical benefit per year: Kshs 250,000.00 (excluding certain conditions).</li>
        <li>Additional critical illness benefit: Kshs 200,000.00.</li>
        <li>Member contribution to claims:
          <ul className="list-disc ml-6">
            <li>20% for In-Patient and Out-Patient services.</li>
            <li>20% for doctors and specialists’ fees.</li>
            <li>60% of retail price for chronic illness medicines, supplements, and vitamins.</li>
          </ul>
        </li>
        <li>Emergency dental treatment benefit: Up to Kshs 20,000.00.</li>
        <li>50% coverage for other dental treatments (non-cosmetic), up to Kshs 50,000.00.</li>
        <li>50% coverage for optical care, up to Kshs 30,000.00.</li>
      </ul>
    </section>
    
    <p className="text-lg text-gray-700 mt-4">
      Join the Medical Fund today and contribute to the well-being of the community. Together, we can make a difference.
    </p>
  </div>
);

export default MedicalFund;
