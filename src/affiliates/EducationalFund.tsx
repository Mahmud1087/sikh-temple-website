const EducationalFund: React.FC = () => (
    <div className="p-6 bg-blue-100">
      <h1 className="font-bold text-blue-600">
        The Education Fund of Siri Guru Singh Sabha Mombasa
      </h1>
  
      <p className="text-sm text-gray-700">
        “The Education Fund of Siri Guru Singh Sabha, Mombasa” was established under Clause 2(c) of the Constitution of Siri Guru Singh Sabha, Mombasa 
        “To promote religious, cultural, educational, medical, physical and intellectual advancement of the Sikhs” as an “Endowment and General Fund”.
      </p>
  
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {/* Aim Section */}
        <div className="rounded-md bg-yellow-200 p-6">
          <h2 className="font-semibold text-blue-500">Our Aim</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Provide assistance in the form of bursaries to those who have financial difficulties in paying school fees. Please contact any Committee Member in strict confidence.</li>
            <li>Award scholarships to children who have performed exceptionally well during their annual end-of-year examinations.</li>
            <li>Assist parents who wish to enroll their child in a better school by exploring ways to support them.</li>
            <li>Support adults seeking to enhance their education/skills (e.g., computer classes, typing). Applications are welcome.</li>
            <li>Application forms can be collected from Committee Members S'rni Davinder Jeetha or S'rni Manjinder Ghuman.</li>
          </ul>
        </div>
  
        {/* Awards Section */}
        <div className="rounded-md bg-yellow-200 p-6 text-left">
          <h2 className=" font-semibold text-blue-500">Awards</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Certificate and a cash prize of Sh.100,000 for any child attaining 3 "A"s in "A" Levels.</li>
            <li>Certificate and a cash prize of Sh.50,000 for any child attaining 9 or more "A"s in "O" Levels.</li>
            <li>Children achieving excellence in any field (e.g., Art, Public Speaking, Student of the Year) are eligible for recognition at the next Awards Ceremony.</li>
            <li>Proof of results must accompany the application form. Awards are based on cumulative year-end results.</li>
          </ul>
        </div>
        
        {/* Scholarships Section */}
        <div className="rounded-md bg-yellow-200 p-6 text-left">
          <h2 className="font-semibold text-blue-500">Scholarships</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Scholarships recognize outstanding performance in academic fields.</li>
            <li>They are one-time payments, but children may reapply upon attaining outstanding grades.</li>
            <li>High achievers may also receive assistance to procure necessary educational equipment, such as laptops or computers.</li>
            <li>Scholarships are awarded irrespective of the parents' financial status.</li>
          </ul>
        </div>
  
        {/* Bursaries Section */}
        <div className="rounded-md bg-yellow-200 p-6 text-wrap text-left">
          <h2 className="font-semibold text-blue-500">Bursaries</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Bursaries are awarded for one academic year and are paid directly to the learning institution.</li>
            <li>To renew a bursary, a fresh application with updated details must be submitted, accompanied by:
              <ul className="list-decimal list-inside ml-6 space-y-2">
                <li>Updated application form</li>
                <li>Previous term’s school report</li>
                <li>Invoice from the school</li>
              </ul>
            </li>
            <li>Applications must be submitted at least seven days in advance.</li>
          </ul>
        </div>
  

        {/* Contact Section */}
        <div className="rounded-xl bg-yellow-200 p-4 text-center">
          <h2 className="font-semibold text-blue-500">Contact Information</h2>
          <p className="text-sm text-gray-700 text-">
            <strong>Address:</strong> The Education Fund of Siri Guru Singh Sabha Mombasa<br />
            P. O. Box 83550 - 80100 Mombasa<br />
            <strong>Tel:</strong> +254 722 415378<br />
            <strong>Email:</strong> <a href="mailto:sefmombasa@gmail.com" className="text-blue-500 underline">sefmombasa@gmail.com</a>
          </p>
        </div>
  
        {/* Breaking News Section */}
        <div className="rounded-md bg-yellow-200 p-6 text-center">
          <h2 className="font-semibold text-blue-500">Breaking News</h2>
          <p className="text-sm text-gray-700">
            The Education Fund will now offer awards for high achievers across all classes, from Year One to University! Additionally, the Fund will assist those pursuing vocational courses.
          </p>
        </div>
        </div>
      {/* Gallery Section */}
      <div className="mt-8">
        <h2 className="font-semibold text-blue-500">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-yellow-200 h-40 rounded shadow-sm flex items-center justify-center">Image Placeholder</div>
          <div className="bg-yellow-200 h-40 rounded shadow-sm flex items-center justify-center">Image Placeholder</div>
          <div className="bg-yellow-200 h-40 rounded shadow-sm flex items-center justify-center">Image Placeholder</div>
        </div>
      </div>
    </div>
  );
  
  export default EducationalFund;
  