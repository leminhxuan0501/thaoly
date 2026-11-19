(() => {
  const chapters = [
    { name: "17.1 Introduction & Properties", description: "Khái niệm, nguồn gốc, mô tiết, tính chất lý hóa của tinh dầu (volatile oils)." },
    { name: "17.2 Classification of Volatile Oils", description: "Phân loại tinh dầu theo nhóm chức hóa học (Table 17.1) và dược liệu tiêu biểu." },
    { name: "17.3 Extraction of Volatile Oils", description: "Các phương pháp chiết xuất tinh dầu: chưng cất, rạch/ép, dung môi không bay hơi & bay hơi." },
    { name: "17.4–17.5 Terpenoids & Isoprene Rule", description: "Cấu trúc terpenoid, quy tắc isoprene, phân loại theo số carbon (C5H8)n và số vòng." },
    { name: "17.6–17.9 Evaluation, Tests, Storage & Uses", description: "Kiểm nghiệm, thử nghiệm hóa học, bảo quản và ứng dụng điều trị của tinh dầu." },
    { name: "17.10–17.11 Hydrocarbons, Alcohols & Turpentine", description: "Tinh dầu chứa hydrocarbon, alcohol và chuyên luận dầu thông (Turpentine oil)." }
  ];

  const rawQuestions = [
    // --- PART 0: 17.1 Introduction & Properties (18 questions) ---
    {
      chapter: 0,
      text: "Volatile oils are also commonly known as:",
      options: ["Essential oils and ethereal oils", "Fixed oils and mineral oils", "Glycosides and alkaloids", "Resins and mucilages"],
      correct: 0,
      explanation: "Mục 17.1 nêu rõ tinh dầu bay hơi ở nhiệt độ thường nên gọi là volatile/ethereal oils, và đại diện cho tinh túy hoạt chất thực vật nên còn gọi là essential oils."
    },
    {
      chapter: 0,
      text: "Which feature characterizes volatile oils when exposed to air at ordinary temperature?",
      options: ["They evaporate without leaving a permanent grease spot", "They remain solid and non-volatile", "They saponify rapidly with alkalis", "They dissolve freely in distilled water"],
      correct: 0,
      explanation: "Khác với dầu béo (fixed oils), tinh dầu bay hơi hoàn toàn khi tiếp xúc không khí ở nhiệt độ thường, không để lại vết dầu loang vĩnh viễn trên giấy lọc và không bị xà phòng hóa bởi kiềm."
    },
    {
      chapter: 0,
      text: "In umbelliferous fruits, volatile oils are usually contained in:",
      options: ["Oil ducts", "Mesophyll cells", "Glandular trichomes", "Sub-epidermal starch grains"],
      correct: 0,
      explanation: "Trong quả họ Hoa tán (umbelliferous fruits), tinh dầu thường nằm trong các ống tiết (oil ducts)."
    },
    {
      chapter: 0,
      text: "Where are the oil cells or oil glands located in lemon and orange fruits?",
      options: ["In the sub-epidermal tissue of the peel", "Inside the central endosperm", "Only in the root xylem", "In the woody vascular bundles"],
      correct: 0,
      explanation: "Ở chanh và cam, tế bào tiết hoặc túi tiết dầu nằm ở mô dưới biểu bì (sub-epidermal tissue) của vỏ quả."
    },
    {
      chapter: 0,
      text: "In eucalyptus leaves, volatile oil is mainly stored in which tissue?",
      options: ["Mesophyll", "Root cortex", "Phloem fibers", "Seed coat"],
      correct: 0,
      explanation: "Theo mục 17.1, tinh dầu trong lá bạch đàn (eucalyptus leaves) nằm trong mô thịt lá (mesophyll)."
    },
    {
      chapter: 0,
      text: "Why do whole black mustard seeds have no odor until crushed with water?",
      options: ["Sinigrin and myrosin are in separate cells and react only when mixed with water", "The oil is frozen solid inside the seed coat", "Mustard seeds contain only fixed oils until heated", "Water converts cellulose directly into volatile oil"],
      correct: 0,
      explanation: "Glycoside sinigrin và enzym myrosin nằm ở các tế bào khác nhau trong hạt mù tạt đen; chỉ khi nghiền nát với nước chúng mới tiếp xúc và thủy phân tạo allyl isothiocyanate có mùi hăng mạnh."
    },
    {
      chapter: 0,
      text: "Which compound is formed by the enzymatic decomposition of sinigrin in black mustard seeds?",
      options: ["Allyl isothiocyanate", "Eugenol", "Camphor", "Menthol"],
      correct: 0,
      explanation: "Enzym myrosin phân giải glycoside sinigrin khi có mặt nước tạo thành allyl isothiocyanate — thành phần chính của tinh dầu mù tạt."
    },
    {
      chapter: 0,
      text: "Which statement is TRUE regarding the solubility of volatile oils?",
      options: ["Freely soluble in ether and chloroform, fairly soluble in alcohol, insoluble in water", "Freely soluble in water and insoluble in organic solvents", "Insoluble in alcohol, ether, and chloroform", "Soluble only in strong mineral acids"],
      correct: 0,
      explanation: "Tinh dầu tan dễ trong ether và chloroform, tan khá trong cồn (alcohol) và thực tế không tan trong nước."
    },
    {
      chapter: 0,
      text: "Which substances can be dissolved by volatile oils?",
      options: ["Fixed oils, fats, resins, camphor, and free alkaloids", "Cellulose, starch, and inorganic salts", "Proteins and nucleic acids in water", "Polysaccharide gums and pectins"],
      correct: 0,
      explanation: "Tinh dầu có khả năng hòa tan nhiều chất như dầu béo, mỡ, nhựa, long não (camphor) và nhiều alkaloid ở dạng base tự do."
    },
    {
      chapter: 0,
      text: "Chemically, most volatile oils are derived from:",
      options: ["Terpenes (mainly mono- and sesquiterpenes) and their oxygenated derivatives", "Polypeptides and amino acid polymers", "High-molecular-weight polysaccharides", "Triglycerides of long-chain fatty acids"],
      correct: 0,
      explanation: "Về mặt hóa học, tinh dầu chủ yếu có nguồn gốc từ các terpene (chủ yếu là monoterpene và sesquiterpene) cùng các dẫn chất chứa oxy của chúng."
    },
    {
      chapter: 0,
      text: "Which volatile oil is specifically mentioned in the text as being heavier than water?",
      options: ["Clove oil", "Turpentine oil", "Peppermint oil", "Lemon oil"],
      correct: 0,
      explanation: "Đa số tinh dầu nhẹ hơn nước, ngoại trừ một số ít như tinh dầu đinh hương (Clove oil) nặng hơn nước."
    },
    {
      chapter: 0,
      text: "What happens to colorless volatile oils when exposed to air and direct sunlight?",
      options: ["They become darker due to oxidation", "They turn into water-soluble sugars", "They remain completely unchanged indefinitely", "They precipitate as white crystalline salts"],
      correct: 0,
      explanation: "Tinh dầu thường là chất lỏng không màu, nhưng khi tiếp xúc với không khí và ánh sáng trực tiếp sẽ sẫm màu hơn do quá trình oxy hóa."
    },
    {
      chapter: 0,
      text: "How do fixed oils differ from volatile oils in physical and chemical tests?",
      options: ["Fixed oils leave a permanent grease spot and saponify with alkalis", "Fixed oils evaporate completely at room temperature", "Fixed oils are always optically active terpenes", "Fixed oils never leave stains on filter paper"],
      correct: 0,
      explanation: "Dầu béo (fixed oils) để lại vết dầu nhờn vĩnh viễn trên giấy lọc và bị xà phòng hóa với kiềm, còn tinh dầu thì không."
    },
    {
      chapter: 0,
      text: "Which physical property is characteristic of most volatile oils?",
      options: ["High refractive index and optical activity", "Low refractive index and complete optical inactivity", "Density always greater than 1.5 g/mL", "Boiling point below 0°C"],
      correct: 0,
      explanation: "Tinh dầu có mùi đặc trưng, chỉ số khúc xạ cao (high refractive index) và đa số có tính quang hoạt (optically active)."
    },
    {
      chapter: 0,
      text: "In black mustard seed, what role does myrosin play?",
      options: ["It is the enzyme that decomposes sinigrin in the presence of water", "It is the volatile oil responsible for the pungent smell", "It is a fixed oil used as a solvent", "It is a resin that coats the seed epidermis"],
      correct: 0,
      explanation: "Myrosin là enzym thủy phân glycoside sinigrin khi hạt được nghiền nát với nước."
    },
    {
      chapter: 0,
      text: "In some plants, volatile oils are secreted externally in:",
      options: ["Trichomes", "Root hairs", "Xylem vessels", "Pith parenchyma"],
      correct: 0,
      explanation: "Mục 17.1 liệt kê các cấu trúc tiết tinh dầu gồm ống tiết, tế bào tiết, túi tiết và lông tiết (trichomes) ở nhiều loài thực vật."
    },

    // --- PART 1: 17.2 Classification of Volatile Oils (16 questions) ---
    {
      chapter: 1,
      text: "According to Table 17.1, volatile oils are classified primarily on the basis of:",
      options: ["Functional groups present", "Botanical family of the plant", "Geographical altitude of cultivation", "Color of the distilled liquid"],
      correct: 0,
      explanation: "Mục 17.2 nêu rõ tinh dầu được phân loại dựa trên nhóm chức hóa học (functional groups) có mặt trong cấu trúc (Bảng 17.1)."
    },
    {
      chapter: 1,
      text: "Which drug is listed in Table 17.1 as an example of hydrocarbon volatile oils?",
      options: ["Turpentine oil", "Peppermint oil", "Clove oil", "Eucalyptus oil"],
      correct: 0,
      explanation: "Theo Bảng 17.1, nhóm Hydrocarbons có đại diện tiêu biểu là tinh dầu thông (Turpentine oil)."
    },
    {
      chapter: 1,
      text: "Peppermint oil, Pudina, and Sandalwood oil belong to which chemical group in Table 17.1?",
      options: ["Alcohols", "Ketones", "Oxides", "Esters"],
      correct: 0,
      explanation: "Theo Bảng 17.1, Peppermint oil, Pudina và Sandalwood oil thuộc nhóm Alcohols."
    },
    {
      chapter: 1,
      text: "Which group of volatile oils includes Lemongrass oil, Cinnamon, Cassia, and Saffron?",
      options: ["Aldehydes", "Phenols", "Hydrocarbons", "Oxides"],
      correct: 0,
      explanation: "Cymbopogon sp., tinh dầu sả (Lemongrass oil), quế (Cinnamon, Cassia) và nghệ tây (Saffron) thuộc nhóm Aldehydes."
    },
    {
      chapter: 1,
      text: "Camphor, Caraway, Dill, Jatamansi, and Fennel are classified under which group?",
      options: ["Ketones", "Alcohols", "Phenolic ethers", "Esters"],
      correct: 0,
      explanation: "Theo Bảng 17.1, Camphor, Caraway, Dill, Jatamansi và Fennel thuộc nhóm Ketones."
    },
    {
      chapter: 1,
      text: "Which drugs are examples of phenol-containing volatile oils in Table 17.1?",
      options: ["Clove, Ajowan, and Tulsi", "Nutmeg and Calamus", "Valerian and Rosemary oil", "Eucalyptus and Cardamom"],
      correct: 0,
      explanation: "Nhóm Phenols trong Bảng 17.1 gồm Đinh hương (Clove), Ajowan và Hương nhu (Tulsi)."
    },
    {
      chapter: 1,
      text: "Nutmeg and Calamus belong to which functional group class in Table 17.1?",
      options: ["Phenolic ethers", "Aldehydes", "Ketones", "Hydrocarbons"],
      correct: 0,
      explanation: "Nutmeg (nhục đậu khấu) và Calamus (thạch xương bồ) thuộc nhóm Phenolic ethers."
    },
    {
      chapter: 1,
      text: "Eucalyptus, Cardamom, and Chenopodium oil are examples of which class?",
      options: ["Oxides", "Esters", "Phenols", "Alcohols"],
      correct: 0,
      explanation: "Eucalyptus, Cardamom và Chenopodium oil thuộc nhóm Oxides trong Bảng 17.1."
    },
    {
      chapter: 1,
      text: "Which set of drugs represents ester-containing volatile oils in Table 17.1?",
      options: ["Valerian, Rosemary oil, Garlic, and Gaultheria oil", "Turpentine oil and Sandalwood oil", "Cinnamon, Cassia, and Saffron", "Clove, Tulsi, and Nutmeg"],
      correct: 0,
      explanation: "Theo Bảng 17.1, nhóm Esters gồm Valerian, Rosemary oil, Garlic và Gaultheria oil."
    },
    {
      chapter: 1,
      text: "Which of the following is a mismatch according to Table 17.1?",
      options: ["Sandalwood oil — Ketones", "Turpentine oil — Hydrocarbons", "Cinnamon — Aldehydes", "Gaultheria oil — Esters"],
      correct: 0,
      explanation: "Sandalwood oil thuộc nhóm Alcohols chứ không phải Ketones."
    },
    {
      chapter: 1,
      text: "Which two drugs are both classified as aldehydes in Table 17.1?",
      options: ["Cinnamon and Lemongrass oil", "Clove and Eucalyptus", "Camphor and Menthol", "Valerian and Turpentine"],
      correct: 0,
      explanation: "Cả Cinnamon và Lemongrass oil đều nằm trong nhóm Aldehydes ở Bảng 17.1."
    },
    {
      chapter: 1,
      text: "If a student is grouping Eucalyptus and Cardamom together, which chemical class are they studying?",
      options: ["Oxides", "Phenolic ethers", "Hydrocarbons", "Ketones"],
      correct: 0,
      explanation: "Cả Eucalyptus và Cardamom đều là tinh dầu thuộc nhóm Oxides."
    },

    // --- PART 2: 17.3 Extraction of Volatile Oils (18 questions) ---
    {
      chapter: 2,
      text: "In distillation of volatile oils, which method is used for fresh plant materials vs. air-dried parts?",
      options: ["Hydrodistillation for fresh materials; steam distillation for air-dried parts", "Steam distillation for fresh materials; dry roasting for dried parts", "Scarification for fresh leaves; enfleurage for roots", "Ecuelle method for dried bark; sponge process for seeds"],
      correct: 0,
      explanation: "Mục 17.3 nêu rõ: dược liệu tươi tách bằng cất nước (hydrodistillation), còn bộ phận phơi khô trong không khí tách bằng cất lôi cuốn hơi nước (steam distillation), dù dùng nguyên liệu tươi vẫn tốt hơn trong cả hai trường hợp."
    },
    {
      chapter: 2,
      text: "Extraction by scarification is specifically used to prepare which essential oils?",
      options: ["Oil of lemon, oil of orange, and oil of bergamot", "Oil of turpentine, clove, and sandalwood", "Oil of peppermint, eucalyptus, and garlic", "Oil of valerian, cinnamon, and fennel"],
      correct: 0,
      explanation: "Phương pháp rạch/ép (scarification) dùng cho tinh dầu vỏ cam, chanh và bergamot vì túi tiết nằm ngay dưới bề mặt vỏ quả."
    },
    {
      chapter: 2,
      text: "What are the two principal methods of scarification?",
      options: ["The sponge process and the ecuelle process", "Enfleurage and maceration", "Hydrodistillation and steam distillation", "Spraying and light petroleum extraction"],
      correct: 0,
      explanation: "Hai phương pháp chính của scarification là phương pháp dùng bọt biển (sponge process) và phương pháp bàn chông quay (ecuelle process)."
    },
    {
      chapter: 2,
      text: "Why is the sponge process for citrus peels carried out in cool, darkened rooms?",
      options: ["To minimize the harmful effects of heat and light on the volatile oil", "To freeze the water layer before pressing", "To accelerate enzymatic hydrolysis of glycosides", "To evaporate the essential oil rapidly"],
      correct: 0,
      explanation: "Toàn bộ quy trình ép bằng bọt biển được thực hiện trong phòng mát, tối nhằm hạn chế tác hại của nhiệt độ và ánh sáng làm biến chất tinh dầu."
    },
    {
      chapter: 2,
      text: "How does the ecuelle process extract oil from citrus rinds?",
      options: ["Rinds are ruptured mechanically using numerous pointed projections with a rotary movement", "Peels are boiled directly in concentrated ethanol", "Petals are layered onto cold lard plates", "Seeds are crushed with water to activate myrosin"],
      correct: 0,
      explanation: "Trong phương pháp ecuelle, vỏ quả được làm vỡ túi tiết bằng cơ học nhờ nhiều mũi nhọn kết hợp chuyển động xoay tròn để thu lấy tinh dầu."
    },
    {
      chapter: 2,
      text: "Which non-volatile solvents are used in the extraction of delicate floral volatile oils?",
      options: ["Fine quality lard or olive oil", "Light petroleum or diethyl ether", "Distilled water or dilute hydrochloric acid", "Aqueous sodium hydroxide solution"],
      correct: 0,
      explanation: "Chiết bằng dung môi không bay hơi sử dụng mỡ lợn tinh khiết (lard) hoặc dầu ô liu (olive oil) chất lượng tốt."
    },
    {
      chapter: 2,
      text: "How is a commercial 'triple extract' prepared after saturating lard or olive oil with floral fragrance?",
      options: ["By agitating the perfumed fat or oil with two or three successive portions of alcohol", "By distilling the lard directly over an open flame", "By filtering the oil through a sponge in sunlight", "By washing the fat with aqueous sodium hydroxide"],
      correct: 0,
      explanation: "Chất béo hoặc dầu đã bão hòa hương hoa được khuấy chiết 2–3 lần liên tiếp với cồn (alcohol) để hòa tan chất thơm; hỗn hợp dịch cồn thu được gọi là 'triple extract'."
    },
    {
      chapter: 2,
      text: "What are the three chief methods under extraction by non-volatile solvent?",
      options: ["Enfleurage, maceration, and spraying process", "Sponge, ecuelle, and hydrodistillation", "Steam distillation, rectification, and chromatography", "Maceration, percolation, and Soxhlet extraction"],
      correct: 0,
      explanation: "Ba phương pháp chính dùng dung môi không bay hơi là ướp lạnh (enfleurage), ngâm nóng (maceration) và phun khí nóng (spraying process)."
    },
    {
      chapter: 2,
      text: "Which statement correctly describes the enfleurage process?",
      options: ["Fresh flower petals are spread over a cold fatty layer or oil-soaked cloth until saturated", "Flowers are heated in lard over a boiling water bath", "Flowers are extracted with light petroleum at low temperature", "Citrus peels are pressed against a natural sponge"],
      correct: 0,
      explanation: "Trong enfleurage, cánh hoa tươi được trải lên lớp mỡ lạnh (hoặc vải tẩm dầu căng trên khung lưới) và thay hoa mới liên tục đến khi chất béo bão hòa hương."
    },
    {
      chapter: 2,
      text: "How does maceration differ from cold enfleurage in floral oil extraction?",
      options: ["In maceration, lard or oil is heated over a water bath while flowers are stirred in", "Maceration uses light petroleum instead of fat", "Maceration uses pointed projections to puncture citrus rinds", "Maceration uses cold air without any solvent"],
      correct: 0,
      explanation: "Trong phương pháp maceration, mỡ lợn hoặc dầu được đun nóng trên bếp cách thủy (water bath), cho hoa vào khuấy liên tục rồi ép kiệt và thay mẻ hoa mới."
    },
    {
      chapter: 2,
      text: "In the spraying method for floral volatile oils, how is the perfume captured?",
      options: ["Warm air passes through flowers, then oil or melted fat is sprayed into the perfume-laden air", "Cold water is sprayed onto dried roots", "Liquid nitrogen is sprayed onto citrus peels", "Alcohol vapor is sprayed into an empty condenser"],
      correct: 0,
      explanation: "Luồng không khí ấm thổi qua cột hoa để cuốn hương thơm, sau đó dầu hoặc mỡ nóng chảy được phun vào luồng khí mang hương này để hấp thụ tinh dầu."
    },
    {
      chapter: 2,
      text: "Which solvent is used in 'Extraction by Volatile Solvent' for flowers, and how is it removed?",
      options: ["Light petroleum, distilled off at a low temperature", "Olive oil, removed by saponification", "Water, removed by freezing", "Chloroform, burned off at high temperature"],
      correct: 0,
      explanation: "Phương pháp dùng dung môi bay hơi chiết hoa bằng ether dầu hỏa nhẹ (light petroleum), sau đó cất thu hồi dung môi ở nhiệt độ thấp để lại tinh dầu."
    },
    {
      chapter: 2,
      text: "In the sponge process, after squeezing the peel against the sponge, how is the oil separated from water?",
      options: ["The turbid liquid is allowed to stand so the oil separates from water and is collected", "The mixture is boiled to dryness", "Sodium hydroxide is added to precipitate the oil", "The liquid is passed through pointed rotary spikes"],
      correct: 0,
      explanation: "Chất lỏng đục gồm dầu và nước được để yên một thời gian ngắn để lớp tinh dầu tách khỏi nước rồi gạn thu lấy."
    },

    // --- PART 3: 17.4 - 17.5 Terpenoids & Isoprene Rule (18 questions) ---
    {
      chapter: 3,
      text: "Where was the term 'terpene' originally derived from?",
      options: ["Turpentine, a volatile liquid isolated from pine trees", "Tropical fruits of the family Rutaceae", "Tetraterpenoid pigments in carrots", "Tannins isolated from oak bark"],
      correct: 0,
      explanation: "Thuật ngữ 'terpene' ban đầu được đặt cho các hợp chất phân lập từ nhựa thông/dầu thông (turpentine) lấy từ cây thông."
    },
    {
      chapter: 3,
      text: "Which terpenoid classes are steam volatile and form the chief constituents of essential oils?",
      options: ["Monoterpenes and sesquiterpenes", "Diterpenes and triterpenes", "Tetraterpenoids (carotenoids)", "Polyterpenoids"],
      correct: 0,
      explanation: "Các monoterpene và sesquiterpene đơn giản bay hơi được theo hơi nước và là thành phần chính của tinh dầu; còn di- và triterpenoid không bay hơi theo hơi nước."
    },
    {
      chapter: 3,
      text: "Tetraterpenoids form a separate group of natural pigments known as:",
      options: ["Carotenoids", "Alkaloids", "Flavonoids", "Saponins"],
      correct: 0,
      explanation: "Tetraterpenoid ($C_{40}H_{64}$) tạo thành một nhóm hợp chất riêng biệt gọi là Carotenoids."
    },
    {
      chapter: 3,
      text: "According to the modern definition, terpenoids are plant hydrocarbons of the general formula $(C_5H_8)_n$ as well as their:",
      options: ["Oxygenated, hydrogenated, and dehydrogenated derivatives", "Only inorganic salt complexes", "Peptide and glycosidic polymers", "Sulfonated aromatic esters"],
      correct: 0,
      explanation: "Định nghĩa hiện đại xác định terpenoid là các hydrocarbon nguồn gốc thực vật có công thức chung $(C_5H_8)_n$ cùng các dẫn chất oxy hóa, hydro hóa và dehydro hóa của chúng."
    },
    {
      chapter: 3,
      text: "Who pointed out that terpenoids can be built up from isoprene units?",
      options: ["Otto Wallach", "Louis Pasteur", "Alexander Fleming", "Dmitri Mendeleev"],
      correct: 0,
      explanation: "Otto Wallach là người chỉ ra rằng các phân tử terpenoid được cấu tạo từ các đơn vị isoprene ($C_5H_8$)."
    },
    {
      chapter: 3,
      text: "What does the Special Isoprene Rule state?",
      options: ["Terpenoid molecules are constructed of two or more isoprene units joined in a 'head-to-tail' fashion", "All terpenoids must contain at least four aromatic rings", "Isoprene units always join exclusively in a 'head-to-head' manner", "Every terpenoid must have an odd number of carbon atoms"],
      correct: 0,
      explanation: "Quy tắc isoprene đặc biệt (Special Isoprene Rule) phát biểu rằng các đơn vị isoprene liên kết với nhau theo kiểu 'đầu nối đuôi' (head-to-tail)."
    },
    {
      chapter: 3,
      text: "Why is the Special Isoprene Rule considered a guiding principle rather than a fixed rule?",
      options: ["Some terpenoids join tail-to-tail (e.g., carotenoids) or have carbon counts not divisible by five", "Isoprene does not exist in nature", "Only monoterpenes follow the rule", "Terpenoids never contain carbon-carbon double bonds"],
      correct: 0,
      explanation: "Ví dụ carotenoid nối đuôi-đuôi (tail-to-tail) ở trung tâm, và một số terpenoid có số nguyên tử carbon không phải bội số của 5."
    },
    {
      chapter: 3,
      text: "In the reading's structure examples, Myrcene and Farnesol represent which classes respectively?",
      options: ["Myrcene is a monoterpene; Farnesol is a sesquiterpene", "Myrcene is a diterpene; Farnesol is a triterpene", "Both are tetraterpenoids", "Myrcene is a sesquiterpene; Farnesol is a monoterpene"],
      correct: 0,
      explanation: "Hình minh họa trong mục 17.4 ghi rõ Myrcene là monoterpene (2 đơn vị isoprene, C10) và Farnesol là sesquiterpene (3 đơn vị isoprene, C15)."
    },
    {
      chapter: 3,
      text: "According to Table 17.2, how many carbon atoms and isoprene units ($n$) are present in Sesquiterpenoids?",
      options: ["15 carbon atoms ($n = 3$)", "10 carbon atoms ($n = 2$)", "20 carbon atoms ($n = 4$)", "30 carbon atoms ($n = 6$)"],
      correct: 0,
      explanation: "Sesquiterpenoids có công thức $C_{15}H_{24}$, gồm 15 nguyên tử carbon tương ứng $n = 3$."
    },
    {
      chapter: 3,
      text: "Which terpenoid class corresponds to 25 carbon atoms ($n = 5$) with formula $C_{25}H_{40}$?",
      options: ["Sesterpenoids", "Sesquiterpenoids", "Diterpenoids", "Triterpenoids"],
      correct: 0,
      explanation: "Theo Bảng 17.2, $n = 5$ (25 carbon, $C_{25}H_{40}$) là nhóm Sesterpenoids."
    },
    {
      chapter: 3,
      text: "Triterpenoids have which molecular formula and value of $n$ in Table 17.2?",
      options: ["$C_{30}H_{48}$ ($n = 6$)", "$C_{20}H_{32}$ ($n = 4$)", "$C_{40}H_{64}$ ($n = 8$)", "$C_{10}H_{16}$ ($n = 2$)"],
      correct: 0,
      explanation: "Triterpenoids có 30 nguyên tử carbon ($n = 6$), công thức phân tử $C_{30}H_{48}$."
    },
    {
      chapter: 3,
      text: "How are terpenoids further subdivided into acyclic, monocyclic, bicyclic, tricyclic, and tetracyclic subclasses?",
      options: ["According to the number of rings present in the structure", "According to their solubility in cold water", "According to the number of nitrogen atoms", "According to their boiling point range"],
      correct: 0,
      explanation: "Mỗi lớp terpenoid được chia nhỏ tiếp dựa vào số vòng (number of rings) có trong cấu trúc phân tử (0 vòng là acyclic, 1 vòng là monocyclic, v.v.)."
    },
    {
      chapter: 3,
      text: "Diterpenoids and triterpenoids are typically obtained from which plant sources rather than steam distillation?",
      options: ["Plant and tree gums and resins", "Fresh flower petals via cold enfleurage", "Aqueous distillate water", "Mustard seed husks"],
      correct: 0,
      explanation: "Di- và triterpenoid không bay hơi theo hơi nước và thường thu được từ gôm và nhựa cây (plant and tree gums and resins)."
    },

    // --- PART 4: 17.6 - 17.9 Evaluation, Tests, Storage & Uses (18 questions) ---
    {
      chapter: 4,
      text: "Why does essential oil composition vary considerably among different manufacturers?",
      options: ["Environmental factors (sunlight, rainfall) and manufacturing processes affect chemical composition", "Volatile oils are synthetic mixtures with no standard formula", "Distillation destroys all terpenes randomly", "Plants produce identical oils regardless of climate"],
      correct: 0,
      explanation: "Mục 17.6 giải thích điều kiện môi trường (ánh sáng mặt trời, lượng mưa) và quy trình sản xuất gây ra sự biến thiên đáng kể về chất lượng tinh dầu."
    },
    {
      chapter: 4,
      text: "Which physical measurements are used in the evaluation of essential oils?",
      options: ["Optical rotation, relative density, and refractive index", "Melting point, ash value, and swelling index", "Hemolytic index and foaming index", "Saponification value and acid value only"],
      correct: 0,
      explanation: "Đo lường vật lý để đánh giá tinh dầu gồm góc quay cực (optical rotation), tỷ trọng tương đối (relative density) và chỉ số khúc xạ (refractive index)."
    },
    {
      chapter: 4,
      text: "Which analytical technique is used to determine the proportions of individual components in volatile oils?",
      options: ["Chromatographic techniques", "Gravimetric ash determination", "Titration with EDTA", "Flame photometry"],
      correct: 0,
      explanation: "Các kỹ thuật sắc ký (chromatographic techniques) được dùng để xác định tỷ lệ từng cấu tử riêng lẻ trong tinh dầu."
    },
    {
      chapter: 4,
      text: "How are the ketone and aldehyde contents of volatile oils determined quantitatively?",
      options: ["Reaction with hydroxylamine hydrochloride (oxime formation) and titration of liberated acid", "Precipitation with picric acid and weighing", "Saponification with alcoholic potassium hydroxide", "Reaction with ninhydrin to measure purple absorbance"],
      correct: 0,
      explanation: "Hàm lượng ketone và aldehyde được định lượng bằng phản ứng với hydroxylamine hydrochloride tạo oxime, sau đó chuẩn độ lượng acid giải phóng ra."
    },
    {
      chapter: 4,
      text: "What color develops when a thin section of a volatile oil-containing drug is treated with alcoholic Sudan III solution?",
      options: ["Red color", "Deep violet color", "Bright green precipitate", "No color change"],
      correct: 0,
      explanation: "Theo mục 17.7, vi phẫu dược liệu chứa tinh dầu cho màu đỏ (red colour) khi xử lý với dung dịch Sudan III trong cồn."
    },
    {
      chapter: 4,
      text: "Besides alcoholic Sudan III, which reagent produces a red color with thin sections of drugs containing volatile oils?",
      options: ["Tincture of alkanna", "Benedict's reagent", "Biuret reagent", "Dragendorff's reagent"],
      correct: 0,
      explanation: "Cồn thuốc alkanna (tincture of alkanna) cũng tạo màu đỏ đặc trưng khi thử vi phẫu dược liệu chứa tinh dầu."
    },
    {
      chapter: 4,
      text: "What changes occur when volatile oils undergo oxidation during improper storage?",
      options: ["Change in color, increase in viscosity, and change in odor", "Decrease in viscosity and complete loss of color", "Conversion into water-soluble amino acids", "Immediate crystallization into pure glucose"],
      correct: 0,
      explanation: "Khi bị oxy hóa do không khí, ẩm và ánh sáng, tinh dầu biến đổi màu sắc, tăng độ nhớt (increase in viscosity) và biến đổi mùi."
    },
    {
      chapter: 4,
      text: "Which storage conditions are recommended in Section 17.8 for volatile oils?",
      options: ["Well-closed, completely filled containers away from light in cool places", "Half-filled clear glass bottles in direct sunlight", "Open wide-mouth jars at warm room temperature", "Permeable paper bags in humid rooms"],
      correct: 0,
      explanation: "Tinh dầu phải được bảo quản trong chai lọ đậy kín hoàn toàn, nạp đầy (completely filled để giảm không khí), tránh ánh sáng và để nơi mát."
    },
    {
      chapter: 4,
      text: "Which volatile oil is listed as an anthelmintic in Section 17.9?",
      options: ["Chenopodium oil", "Eucalyptus oil", "Clove oil", "Lemongrass oil"],
      correct: 0,
      explanation: "Theo danh sách ứng dụng điều trị mục 17.9, tinh dầu giun (Chenopodium oil) có tác dụng trị giun sán (anthelmintic)."
    },
    {
      chapter: 4,
      text: "Match the volatile oil drug with its therapeutic use according to Section 17.9:",
      options: ["Juniper — Diuretic; Jatamansi — Sedative", "Clove — Anthelmintic; Eucalyptus — Sedative", "Citronella — Local anesthetic; Lemongrass — Diuretic", "Umbelliferous fruits — Insect repellent; Juniper — Source of vitamin A"],
      correct: 0,
      explanation: "Theo mục 17.9: Juniper dùng lợi tiểu (diuretic) và Jatamansi dùng an thần (sedative)."
    },
    {
      chapter: 4,
      text: "Which volatile oil is used as a local anesthetic and which is used as a counter-irritant in Section 17.9?",
      options: ["Clove (local anesthetic) and Oil of wintergreen (counter-irritant)", "Eucalyptus (local anesthetic) and Citronella (counter-irritant)", "Lemongrass (local anesthetic) and Juniper (counter-irritant)", "Jatamansi (local anesthetic) and Chenopodium (counter-irritant)"],
      correct: 0,
      explanation: "Tinh dầu đinh hương (Clove) dùng gây tê tại chỗ (local anesthetic), còn dầu lộc đề xanh (Oil of wintergreen) dùng làm chất kích ứng đối kháng (counter-irritant)."
    },
    {
      chapter: 4,
      text: "According to Section 17.9, Lemongrass oil is utilized therapeutically as:",
      options: ["A source of vitamin A", "An anthelmintic", "A local anesthetic", "A sedative"],
      correct: 0,
      explanation: "Mục 17.9 liệt kê Lemongrass là nguồn cung cấp vitamin A (Source of vitamin A)."
    },
    {
      chapter: 4,
      text: "Which drug is listed as an insect repellent and which is listed as an antiseptic in Section 17.9?",
      options: ["Citronella (insect repellent) and Eucalyptus (antiseptic)", "Turpentine (insect repellent) and Jatamansi (antiseptic)", "Clove (insect repellent) and Lemongrass (antiseptic)", "Juniper (insect repellent) and Wintergreen (antiseptic)"],
      correct: 0,
      explanation: "Tinh dầu sả chanh (Citronella) dùng đuổi côn trùng (insect repellent), còn tinh dầu bạch đàn (Eucalyptus) dùng sát khuẩn (antiseptic)."
    },

    // --- PART 5: 17.10 - 17.11 Hydrocarbons, Alcohols & Turpentine Oil (19 questions) ---
    {
      chapter: 5,
      text: "Which monocyclic monoterpene hydrocarbon is the most widely distributed across Citrus, Mint, Caraway, and Coriander oils?",
      options: ["Limonene", "Pinene", "Cadinene", "Borneol"],
      correct: 0,
      explanation: "Limonene là monoterpene đơn vòng phân bố rộng rãi nhất, có mặt trong tinh dầu họ Cam quýt, Bạc hà, Thì là Ba Tư, Rau mùi..."
    },
    {
      chapter: 5,
      text: "How are Pinene and Sabinene classified structurally in Section 17.10?",
      options: ["Dicyclic monoterpenes", "Acyclic sesquiterpenes", "Triterpene alcohols", "Phenolic ethers"],
      correct: 0,
      explanation: "Cả pinene và sabinene (nhóm thujane) đều là các monoterpene hai vòng (dicyclic monoterpenes)."
    },
    {
      chapter: 5,
      text: "Which compounds are examples of sesquiterpene hydrocarbons mentioned in Section 17.10?",
      options: ["Cadinene and beta-caryophyllene", "Limonene and myrcene", "Menthol and linalool", "Geraniol and borneol"],
      correct: 0,
      explanation: "Cadinene (trong nhựa thông bách xù) và $\beta$-caryophyllene (trong ngải cứu, bạc hà, quế, đinh hương) là các sesquiterpene hydrocarbon."
    },
    {
      chapter: 5,
      text: "What is the botanical source and family of Turpentine oil?",
      options: ["Oleoresin from Pinus longifolia Roxb and other Pinus species (Pinaceae)", "Dried flower buds of Syzygium aromaticum (Myrtaceae)", "Fresh leaves of Mentha piperita (Lamiaceae)", "Ripe seeds of Brassica nigra (Brassicaceae)"],
      correct: 0,
      explanation: "Dầu thông (Turpentine oil) thu được bằng cách cất nhựa dầu (oleoresin) của cây Pinus longifolia Roxb và các loài Pinus khác thuộc họ Thông (Pinaceae)."
    },
    {
      chapter: 5,
      text: "Why is distilled turpentine oil treated with an aqueous solution of sodium hydroxide during preparation?",
      options: ["To remove traces of phenols, cresol, and resin acids", "To convert alpha-pinene into menthol", "To saponify triglycerides into soap", "To increase the water solubility of the oil"],
      correct: 0,
      explanation: "Xử lý dầu thông thô với dung dịch NaOH loãng giúp loại bỏ vết phenol, cresol và các acid nhựa, tạo thành dầu thông tinh chế (rectified turpentine oil)."
    },
    {
      chapter: 5,
      text: "What are the chief chemical constituents of Turpentine oil?",
      options: ["Alpha- and beta-pinene with small quantities of camphene and limonene", "Eugenol and caryophyllene oxide", "Cinnamaldehyde and eugenol", "Menthol and menthone"],
      correct: 0,
      explanation: "Dầu thông chứa hơn 40 terpene, trong đó thành phần chính là $\alpha$- và $\beta$-pinene cùng lượng nhỏ camphene, limonene..."
    },
    {
      chapter: 5,
      text: "Which of the following is an internal adverse effect of Turpentine oil mentioned in the text?",
      options: ["Irritation of the kidney when taken internally", "Severe hypoglycemia", "Permanent discoloration of teeth", "Bone marrow suppression"],
      correct: 0,
      explanation: "Mục Uses của Turpentine oil cảnh báo khi dùng đường uống (taken internally), dầu thông gây kích ứng thận (irritation of kidney)."
    },
    {
      chapter: 5,
      text: "What are the common adulterants of Turpentine oil and how are they detected?",
      options: ["Petroleum jelly (low weight per mL) and resin oil (leaves a fatty stain on paper)", "Distilled water (high optical rotation) and glucose (Benedict's test)", "Starch (iodine test) and calcium carbonate (effervescence)", "Menthol (cooling taste) and camphor (sublimation)"],
      correct: 0,
      explanation: "Dầu thông thường bị giả mạo bằng vaselin/petroleum jelly (phát hiện nhờ tỷ trọng/weight per mL thấp) và dầu nhựa/resin oil (để lại vết mỡ khi thử trên giấy)."
    },
    {
      chapter: 5,
      text: "Which marketed pharmaceutical products contain Turpentine oil according to the text?",
      options: ["Rumalaya gel and Pain balm (Himalaya Drug Company)", "Aspirin cardio and Panadol extra", "Betadine solution and Strepsils", "Voltaren emulgel and Salonpas"],
      correct: 0,
      explanation: "Dầu thông là một thành phần trong chế phẩm Rumalaya gel và Pain balm của hãng Himalaya Drug Company."
    },
    {
      chapter: 5,
      text: "Why are lower aliphatic alcohols (methyl, ethyl, isobutyl, isoamyl) absent from steam-distilled volatile oils?",
      options: ["They are soluble in water and washed away during steam distillation", "They decompose completely above 40°C", "They are insoluble in all organic solvents", "They polymerize into solid resins"],
      correct: 0,
      explanation: "Các alcohol mạch thẳng phân tử thấp (methyl, ethyl, isobutyl, isoamyl...) tan được trong nước nên bị rửa trôi theo nước ngưng trong quá trình cất lôi cuốn hơi nước."
    },
    {
      chapter: 5,
      text: "Which group of compounds consists of acyclic terpene alcohols found in natural volatile oils?",
      options: ["Geraniol, linalool, and citronellol", "Menthol and alpha-terpineol", "Borneol and camphor", "Zingiberol and santalols"],
      correct: 0,
      explanation: "Geraniol, linalool và citronellol là các alcohol terpene mạch hở (acyclic alcohols) phổ biến trong nhiều tinh dầu tự nhiên."
    },
    {
      chapter: 5,
      text: "Classify menthol, borneol, and zingiberol according to Section 17.11:",
      options: ["Menthol: monocyclic alcohol; Borneol: dicyclic alcohol; Zingiberol: sesquiterpene alcohol", "Menthol: acyclic alcohol; Borneol: monocyclic alcohol; Zingiberol: triterpene", "All three are phenolic ethers", "Menthol: sesquiterpene; Borneol: acyclic; Zingiberol: dicyclic"],
      correct: 0,
      explanation: "Theo mục 17.11: menthol (từ bạc hà) là monocyclic alcohol; borneol là dicyclic terpene alcohol; zingiberol, santalols và artemisin là sesquiterpene alcohols."
    }
  ];

  const letters = ["A", "B", "C", "D"];

  const hash = value => {
    let result = 0;
    for (let index = 0; index < value.length; index += 1) {
      result = (Math.imul(result, 31) + value.charCodeAt(index)) >>> 0;
    }
    return result;
  };

  const shuffle = (values, seed) => {
    const result = [...values];
    let state = seed || 1;
    for (let index = result.length - 1; index > 0; index -= 1) {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      const target = state % (index + 1);
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  };

  const questions = rawQuestions.map((item, idx) => {
    const order = shuffle([0, 1, 2, 3], hash(item.text + idx));
    const options = order.map(i => item.options[i]);
    const answerIndex = order.indexOf(item.correct);
    return {
      id: idx + 1,
      chapter: item.chapter,
      text: item.text,
      options,
      answer: letters[answerIndex],
      explanation: item.explanation
    };
  });

  window.quizChapters = chapters;
  window.quizQuestions = questions;
})();
