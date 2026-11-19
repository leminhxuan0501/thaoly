/**
 * Question Bank - Reading Comprehension for Pharmaceutical Chemistry / Pharmacology
 * Based on the provided reading materials:
 * 1. European Plants as Sources of Effective Medicines
 * 2. Drug and Active Principle
 * 3. Drug Development
 * 4. Search for Prototypes (Lead compounds)
 * 5. Alkaloids (summary-based)
 * 6. Volatile Oils (summary-based)
 * 7. Basic concepts in pharmaceutical chemistry
 *
 * Each section aims for ~40-50 questions where source text allows.
 * Question types: true_false_not_given | multiple_choice | matching | short_answer | fill_blank
 */

const questionBank = {
  // ============================================================
  // SECTION 1: European Plants as Sources of Effective Medicines
  // ============================================================
  europeanPlants: {
    title: "European Plants as Sources of Effective Medicines",
    source: "Color Atlas of Pharmacology – Thieme",
    questions: [
      // True / False / Not Given (original + expanded)
      {
        id: "EP-01",
        type: "true_false_not_given",
        question: "No medicinal plants were chosen to develop drugs in modern medicine.",
        answer: "FALSE",
        explanation: "The text states that few of the hundreds of reputedly curative plant species have survived as drugs with documented effectiveness – meaning some were chosen."
      },
      {
        id: "EP-02",
        type: "true_false_not_given",
        question: "The foxglove leaves tea was proven toxic and should be used with cautions.",
        answer: "NOT GIVEN",
        explanation: "The text mentions Withering introduced digitalis leaves as a tea and described the result, but does not state it was proven toxic or give caution advice."
      },
      {
        id: "EP-03",
        type: "true_false_not_given",
        question: "Although foxglove showed effectiveness in treatment of cardiac dropsy, the efficacy of isolated compounds was not proven in clinical trials.",
        answer: "FALSE",
        explanation: "The text says digoxin continues to be obtained from the plants because its chemical synthesis is too difficult and expensive, and it is 'proven clinically most useful'."
      },
      {
        id: "EP-04",
        type: "true_false_not_given",
        question: "The responsible compounds for Atropa belladonna bioactivities are still not known.",
        answer: "FALSE",
        explanation: "The text clearly identifies atropine and scopolamine as the alkaloids responsible."
      },
      {
        id: "EP-05",
        type: "true_false_not_given",
        question: "Aspirin is not found from willow tree.",
        answer: "TRUE",
        explanation: "Aspirin (acetylsalicylic acid) is a synthetic derivative obtained by acetylation of salicylic acid; it is not found naturally in the willow tree."
      },
      {
        id: "EP-06",
        type: "true_false_not_given",
        question: "Colchicine is effective for acute Gout attacks via multiple molecular mechanisms.",
        answer: "TRUE",
        explanation: "The text describes inhibition of tubulin polymerization (affecting macrophages/neutrophils) and also prevention of mitosis (spindle poison)."
      },
      {
        id: "EP-07",
        type: "true_false_not_given",
        question: "William Withering introduced digitalis leaves as a tea at the end of the 18th century.",
        answer: "TRUE",
        explanation: "Explicitly stated in section A."
      },
      {
        id: "EP-08",
        type: "true_false_not_given",
        question: "Digoxin is still obtained from Digitalis purpurea or D. lanata because chemical synthesis is too difficult and expensive.",
        answer: "TRUE",
        explanation: "Directly stated."
      },
      {
        id: "EP-09",
        type: "true_false_not_given",
        question: "Atropine is a competitive antagonist at the nicotinic acetylcholine receptor.",
        answer: "FALSE",
        explanation: "It is a competitive antagonist at the muscarinic type of acetylcholine receptor."
      },
      {
        id: "EP-10",
        type: "true_false_not_given",
        question: "Salicylic acid is no longer used orally for pain, fever and inflammation because of poor tolerability.",
        answer: "TRUE",
        explanation: "The text says it is no longer taken orally; acetylation improved oral tolerability."
      },
      {
        id: "EP-11",
        type: "true_false_not_given",
        question: "Colchicine causes arrest of mitosis in anaphase.",
        answer: "FALSE",
        explanation: "It causes arrest in metaphase."
      },
      {
        id: "EP-12",
        type: "true_false_not_given",
        question: "The effects of Atropa belladonna were already known in antiquity.",
        answer: "TRUE",
        explanation: "Explicitly stated."
      },
      {
        id: "EP-13",
        type: "true_false_not_given",
        question: "Lily of the valley and christmas rose were used in the Middle Ages to treat dropsy.",
        answer: "TRUE",
        explanation: "They are listed in the group of local plants used since the middle ages to treat “dropsy”."
      },
      {
        id: "EP-14",
        type: "true_false_not_given",
        question: "Modern medicine requires each drug to satisfy objective criteria of efficacy.",
        answer: "TRUE",
        explanation: "Stated in the introduction."
      },
      {
        id: "EP-15",
        type: "true_false_not_given",
        question: "Scopolamine is present in larger amounts than atropine in Atropa belladonna.",
        answer: "FALSE",
        explanation: "Scopolamine is present in smaller amounts."
      },

      // Multiple Choice
      {
        id: "EP-16",
        type: "multiple_choice",
        question: "What is the main reason digoxin is still extracted from plants rather than synthesized?",
        options: [
          "A. It is more effective when extracted from plants",
          "B. Chemical synthesis is too difficult and expensive",
          "C. Plant extraction produces fewer side effects",
          "D. Synthetic digoxin is not approved by regulatory authorities"
        ],
        answer: "B"
      },
      {
        id: "EP-17",
        type: "multiple_choice",
        question: "Atropine is the prototype of a competitive antagonist at which receptor?",
        options: [
          "A. Nicotinic acetylcholine receptor",
          "B. Muscarinic acetylcholine receptor",
          "C. Adrenergic receptor",
          "D. Dopamine receptor"
        ],
        answer: "B"
      },
      {
        id: "EP-18",
        type: "multiple_choice",
        question: "Which plant was used cosmetically in antiquity to dilate the pupils?",
        options: [
          "A. Digitalis purpurea",
          "B. Salix alba",
          "C. Atropa belladonna",
          "D. Colchicum autumnale"
        ],
        answer: "C"
      },
      {
        id: "EP-19",
        type: "multiple_choice",
        question: "Acetylation of salicylic acid was introduced around which year?",
        options: [
          "A. 1800",
          "B. 1850",
          "C. 1900",
          "D. 1950"
        ],
        answer: "C"
      },
      {
        id: "EP-20",
        type: "multiple_choice",
        question: "Colchicine inhibits the polymerization of which protein?",
        options: [
          "A. Actin",
          "B. Tubulin",
          "C. Myosin",
          "D. Keratin"
        ],
        answer: "B"
      },
      {
        id: "EP-21",
        type: "multiple_choice",
        question: "The active principles in foxglove and related plants are:",
        options: [
          "A. Alkaloids",
          "B. Steroids with sugar molecules attached at C3",
          "C. Salicylic acid derivatives",
          "D. Peptides"
        ],
        answer: "B"
      },
      {
        id: "EP-22",
        type: "multiple_choice",
        question: "Which of the following is still used as an external keratolytic agent?",
        options: [
          "A. Digoxin",
          "B. Atropine",
          "C. Salicylic acid",
          "D. Colchicine"
        ],
        answer: "C"
      },
      {
        id: "EP-23",
        type: "multiple_choice",
        question: "William Withering was a physician from which country?",
        options: [
          "A. England",
          "B. Scotland",
          "C. Germany",
          "D. France"
        ],
        answer: "B"
      },
      {
        id: "EP-24",
        type: "multiple_choice",
        question: "Colchicine causes mitotic arrest in which phase?",
        options: [
          "A. Prophase",
          "B. Metaphase",
          "C. Anaphase",
          "D. Telophase"
        ],
        answer: "B"
      },
      {
        id: "EP-25",
        type: "multiple_choice",
        question: "The beneficial effect of colchicine in acute gout is mainly due to its action on:",
        options: [
          "A. Red blood cells",
          "B. Macrophages and neutrophils",
          "C. Platelets",
          "D. Lymphocytes"
        ],
        answer: "B"
      },

      // Matching
      {
        id: "EP-26",
        type: "matching",
        question: "Match the plant with its main active principle or derivative:",
        pairs: [
          { left: "Digitalis purpurea / D. lanata", right: "Digoxin / cardiac glycosides" },
          { left: "Atropa belladonna", right: "Atropine and scopolamine" },
          { left: "Salix alba / S. viminalis", right: "Salicylic acid derivatives → Aspirin" },
          { left: "Colchicum autumnale", right: "Colchicine" }
        ],
        answer: "See pairs"
      },
      {
        id: "EP-27",
        type: "matching",
        question: "Match the substance with its main pharmacological action described in the text:",
        pairs: [
          { left: "Digoxin", right: "Treatment of cardiac dropsy / congestive heart failure" },
          { left: "Atropine", right: "Competitive muscarinic antagonist; pupil dilation" },
          { left: "Acetylsalicylic acid", right: "Improved oral tolerability for pain, fever, inflammation" },
          { left: "Colchicine", right: "Inhibits tubulin polymerization; useful in acute gout" }
        ],
        answer: "See pairs"
      },

      // Short Answer / Fill blank
      {
        id: "EP-28",
        type: "short_answer",
        question: "What does the term “dropsy” refer to in the historical context of the text?",
        answer: "Edema of congestive heart failure / cardiac dropsy"
      },
      {
        id: "EP-29",
        type: "short_answer",
        question: "Why is chemical synthesis of digoxin considered impractical?",
        answer: "It is too difficult and expensive"
      },
      {
        id: "EP-30",
        type: "fill_blank",
        question: "Atropine is the prototype of a competitive antagonist at the __________ receptor of the muscarinic type.",
        answer: "acetylcholine"
      },
      {
        id: "EP-31",
        type: "fill_blank",
        question: "Acetylation of salicylic acid yields __________ (ASA, Aspirin®).",
        answer: "acetylsalicylic acid"
      },
      {
        id: "EP-32",
        type: "short_answer",
        question: "Name two plants (besides foxglove) that were traditionally used to treat dropsy.",
        answer: "Lily of the valley (Convallaria majalis), christmas rose (Helleborus niger), spindletree (Evonymus europaeus)"
      },
      {
        id: "EP-33",
        type: "short_answer",
        question: "What cosmetic use of Atropa belladonna extracts was known in antiquity?",
        answer: "Pupillary dilation (to enhance female attractiveness)"
      },
      {
        id: "EP-34",
        type: "true_false_not_given",
        question: "Hundreds of plant species promoted in medieval herbal formularies have documented effectiveness in modern medicine.",
        answer: "FALSE",
        explanation: "Only few of the hundreds have survived as drugs with documented effectiveness."
      },
      {
        id: "EP-35",
        type: "true_false_not_given",
        question: "Colchicine is found only in the flowers of Colchicum autumnale.",
        answer: "FALSE",
        explanation: "All parts of the plant contain the alkaloid colchicine."
      },
      {
        id: "EP-36",
        type: "multiple_choice",
        question: "The active principles in the plants used for dropsy are steroids with sugar molecules attached at which carbon?",
        options: ["A. C1", "B. C3", "C. C5", "D. C17"],
        answer: "B"
      },
      {
        id: "EP-37",
        type: "short_answer",
        question: "What improved the oral tolerability of salicylic acid?",
        answer: "Acetylation (to form acetylsalicylic acid / Aspirin)"
      },
      {
        id: "EP-38",
        type: "true_false_not_given",
        question: "The text states that digitalis leaves tea is still the preferred form of administration today.",
        answer: "NOT GIVEN",
        explanation: "The text only mentions historical introduction by Withering; modern use focuses on digoxin."
      },
      {
        id: "EP-39",
        type: "multiple_choice",
        question: "Which family does the autumn crocus belong to?",
        options: [
          "A. Solanaceae",
          "B. Lily family",
          "C. Willow family",
          "D. Foxglove family"
        ],
        answer: "B"
      },
      {
        id: "EP-40",
        type: "short_answer",
        question: "List the four plants mentioned that were used since the Middle Ages to treat dropsy.",
        answer: "Foxglove (Digitalis sp.), lily of the valley (Convallaria majalis), christmas rose (Helleborus niger), spindletree (Evonymus europaeus)"
      },
      {
        id: "EP-41",
        type: "true_false_not_given",
        question: "Scopolamine is also found in Atropa belladonna.",
        answer: "TRUE",
        explanation: "Stated: contains the alkaloids atropine ... and scopolamine, in smaller amounts."
      },
      {
        id: "EP-42",
        type: "multiple_choice",
        question: "The main modern clinical use of digoxin mentioned is related to:",
        options: [
          "A. Pain relief",
          "B. Congestive heart failure / cardiac glycosides",
          "C. Gout treatment",
          "D. Pupil dilation"
        ],
        answer: "B"
      },
      {
        id: "EP-43",
        type: "fill_blank",
        question: "Colchicine is described as a __________ poison because it prevents mitosis.",
        answer: "spindle"
      },
      {
        id: "EP-44",
        type: "short_answer",
        question: "What is the French origin meaning of the word “drug” according to related readings (and consistent with historical plant use)?",
        answer: "Dried herb (from French “drogue”)"
      },
      {
        id: "EP-45",
        type: "true_false_not_given",
        question: "All cardiac glycosides are equally useful clinically according to the text.",
        answer: "FALSE",
        explanation: "Digoxin is described as proven clinically most useful among all available cardiac glycosides."
      }
    ]
  },

  // ============================================================
  // SECTION 2: Drug and Active Principle
  // ============================================================
  drugAndActivePrinciple: {
    title: "Drug and Active Principle",
    source: "Color Atlas of Pharmacology – Thieme",
    questions: [
      {
        id: "DAP-01",
        type: "true_false_not_given",
        question: "Until the end of the 19th century, most medicines were natural organic or inorganic products.",
        answer: "TRUE",
        explanation: "Explicitly stated."
      },
      {
        id: "DAP-02",
        type: "true_false_not_given",
        question: "The scientific term “drug” always implies a high potential for physical dependence and abuse.",
        answer: "FALSE",
        explanation: "Colloquially yes, but scientifically the term implies nothing about the quality of action."
      },
      {
        id: "DAP-03",
        type: "true_false_not_given",
        question: "Tinctures contain the complete spectrum of substances present in the plant.",
        answer: "FALSE",
        explanation: "Tinctures contain only those substances soluble in alcohol."
      },
      {
        id: "DAP-04",
        type: "true_false_not_given",
        question: "Morphine was first isolated from opium in 1804 by F.W. Sertürner.",
        answer: "TRUE",
        explanation: "Explicitly stated."
      },
      {
        id: "DAP-05",
        type: "true_false_not_given",
        question: "The dose of an individual constituent in a natural product is always constant.",
        answer: "FALSE",
        explanation: "It is subject to large variations depending on geographical origin, time of harvesting, and storage."
      },
      {
        id: "DAP-06",
        type: "true_false_not_given",
        question: "Fentanyl is less potent than morphine.",
        answer: "FALSE",
        explanation: "Fentanyl requires a dose only 0.1–0.05 times that of morphine (i.e., more potent)."
      },
      {
        id: "DAP-07",
        type: "true_false_not_given",
        question: "Carfentanyl is used in veterinary anesthesia of large animals and is about 5000 times more potent than morphine.",
        answer: "TRUE",
        explanation: "Directly stated."
      },
      {
        id: "DAP-08",
        type: "true_false_not_given",
        question: "One aim of isolating active principles is to enable chemical synthesis and independence from limited natural supplies.",
        answer: "TRUE",
        explanation: "Listed as aim number 4."
      },
      {
        id: "DAP-09",
        type: "true_false_not_given",
        question: "Opium tincture is also known as laudanum.",
        answer: "TRUE",
        explanation: "Shown in the figure description."
      },
      {
        id: "DAP-10",
        type: "true_false_not_given",
        question: "Drying plants was done only to make them lighter for transport.",
        answer: "FALSE",
        explanation: "The main purpose mentioned is to secure a supply year-round, not merely at harvest time."
      },

      // Multiple Choice
      {
        id: "DAP-11",
        type: "multiple_choice",
        question: "The word “drug” originally comes from the French word meaning:",
        options: [
          "A. Medicine",
          "B. Dried herb",
          "C. Poison",
          "D. Extract"
        ],
        answer: "B"
      },
      {
        id: "DAP-12",
        type: "multiple_choice",
        question: "Which of the following is NOT listed as an alkaloid in opium tincture?",
        options: [
          "A. Morphine",
          "B. Codeine",
          "C. Quinine",
          "D. Papaverine"
        ],
        answer: "C"
      },
      {
        id: "DAP-13",
        type: "multiple_choice",
        question: "What is the first listed aim of isolating active principles?",
        options: [
          "A. Chemical synthesis",
          "B. Identification of the active ingredient(s)",
          "C. Ensuring precise dosage",
          "D. Analysis of structure–activity relationships"
        ],
        answer: "B"
      },
      {
        id: "DAP-14",
        type: "multiple_choice",
        question: "Fentanyl requires a dose approximately how many times smaller than morphine?",
        options: [
          "A. 2–5 times",
          "B. 10–20 times",
          "C. 0.1–0.05 times (i.e. 10–20 times more potent)",
          "D. Equal dose"
        ],
        answer: "C"
      },
      {
        id: "DAP-15",
        type: "multiple_choice",
        question: "Soaking plants in alcohol produces a:",
        options: [
          "A. Decoction",
          "B. Tincture",
          "C. Infusion",
          "D. Powder"
        ],
        answer: "B"
      },
      {
        id: "DAP-16",
        type: "multiple_choice",
        question: "Which factor does NOT affect the dose of an individual constituent in a natural product according to the text?",
        options: [
          "A. Geographical origin (biotope)",
          "B. Time of harvesting",
          "C. Conditions and length of storage",
          "D. The patient’s age"
        ],
        answer: "D"
      },
      {
        id: "DAP-17",
        type: "multiple_choice",
        question: "Raw opium is obtained by:",
        options: [
          "A. Drying the leaves of Papaver somniferum",
          "B. Slashing the unripe seed capsules and collecting the milky exudate",
          "C. Extracting the roots with alcohol",
          "D. Distilling the flowers"
        ],
        answer: "B"
      },
      {
        id: "DAP-18",
        type: "multiple_choice",
        question: "One major advantage of using chemically pure constituents is:",
        options: [
          "A. They are always cheaper",
          "B. Precise and constant dosage can be ensured",
          "C. They never cause side effects",
          "D. They are always more potent"
        ],
        answer: "B"
      },

      // Matching & Short Answer
      {
        id: "DAP-19",
        type: "matching",
        question: "Match the aim of isolating active principles with its description:",
        pairs: [
          { left: "1. Identification", right: "Identify the active ingredient(s)" },
          { left: "2. Pharmacodynamics & pharmacokinetics", right: "Analyze biological effects and fate in the body" },
          { left: "3. Dosage precision", right: "Ensure precise and constant dosage" },
          { left: "4. Synthesis possibility", right: "Independence from natural supplies + SAR studies" }
        ],
        answer: "See pairs"
      },
      {
        id: "DAP-20",
        type: "short_answer",
        question: "Name at least four alkaloids found in opium tincture.",
        answer: "Morphine, codeine, narcotine (noscapine), papaverine, narceine"
      },
      {
        id: "DAP-21",
        type: "short_answer",
        question: "What is the approximate potency ratio of carfentanyl compared to morphine?",
        answer: "About 5000 times more potent"
      },
      {
        id: "DAP-22",
        type: "fill_blank",
        question: "Using a natural product usually entails administration of a number of substances possibly possessing very different __________.",
        answer: "activities"
      },
      {
        id: "DAP-23",
        type: "true_false_not_given",
        question: "Modification of the chemical structure of natural substances has frequently led to pharmaceuticals with enhanced potency.",
        answer: "TRUE",
        explanation: "Explicitly stated with the fentanyl example."
      },
      {
        id: "DAP-24",
        type: "multiple_choice",
        question: "In the scientific sense, which of the following can be called a “drug”?",
        options: [
          "A. Only substances causing dependence",
          "B. Dried leaves of peppermint",
          "C. Only synthetic chemicals",
          "D. Only pure isolated compounds"
        ],
        answer: "B"
      },
      {
        id: "DAP-25",
        type: "short_answer",
        question: "Who isolated morphine from opium and in which year?",
        answer: "F.W. Sertürner in 1804"
      },
      {
        id: "DAP-26",
        type: "true_false_not_given",
        question: "Tinctures are prepared by soaking plants in water.",
        answer: "FALSE",
        explanation: "They are prepared by soaking in alcohol (ethanol)."
      },
      {
        id: "DAP-27",
        type: "multiple_choice",
        question: "The process of isolating active principles began systematically after the isolation of:",
        options: [
          "A. Quinine",
          "B. Morphine",
          "C. Atropine",
          "D. Digoxin"
        ],
        answer: "B"
      },
      {
        id: "DAP-28",
        type: "fill_blank",
        question: "Derivatives of the original constituent may be synthesized in an effort to __________ pharmacological properties.",
        answer: "optimize"
      },
      {
        id: "DAP-29",
        type: "short_answer",
        question: "Why can the relative proportions of individual constituents in a natural product vary considerably?",
        answer: "Depending on geographical origin (biotope), time of harvesting, or conditions and length of storage"
      },
      {
        id: "DAP-30",
        type: "true_false_not_given",
        question: "Pharmaceutical laboratories subsequently isolated the active principles of many other natural products in chemically pure form.",
        answer: "TRUE",
        explanation: "Stated after mentioning Sertürner’s isolation of morphine."
      },
      {
        id: "DAP-31",
        type: "multiple_choice",
        question: "Which of the following is an example of a dried animal or plant product that could historically be called a drug?",
        options: [
          "A. Only synthetic tablets",
          "B. Dried milky exudate of Papaver somniferum (raw opium)",
          "C. Only injectable solutions",
          "D. Only pure crystals"
        ],
        answer: "B"
      },
      {
        id: "DAP-32",
        type: "short_answer",
        question: "What are the four main aims of isolating active principles listed in the text?",
        answer: "1. Identification of active ingredient(s); 2. Analysis of pharmacodynamics and pharmacokinetics; 3. Ensuring precise and constant dosage; 4. Possibility of chemical synthesis and SAR analysis"
      },
      {
        id: "DAP-33",
        type: "true_false_not_given",
        question: "All natural products used as medicines before the 19th century were completely non-toxic.",
        answer: "NOT GIVEN",
        explanation: "The text mentions they might contain substances with healing properties or toxic effects, but does not claim they were non-toxic."
      },
      {
        id: "DAP-34",
        type: "fill_blank",
        question: "Alkaloids are basic substances of __________ origin.",
        answer: "plant"
      },
      {
        id: "DAP-35",
        type: "multiple_choice",
        question: "The example of fentanyl and carfentanyl illustrates the value of:",
        options: [
          "A. Keeping the natural structure unchanged",
          "B. Chemical modification to enhance potency",
          "C. Using only plant extracts",
          "D. Avoiding synthetic derivatives"
        ],
        answer: "B"
      },
      {
        id: "DAP-36",
        type: "short_answer",
        question: "What does “laudanum” refer to in the figure?",
        answer: "Opium tincture"
      },
      {
        id: "DAP-37",
        type: "true_false_not_given",
        question: "Isolation of pure active principles allows independence from limited natural supplies.",
        answer: "TRUE",
        explanation: "Stated as one of the aims."
      },
      {
        id: "DAP-38",
        type: "multiple_choice",
        question: "Which statement about natural product dosage is correct?",
        options: [
          "A. Dosage is always precise and reproducible",
          "B. Dosage of individual constituents can vary greatly",
          "C. All constituents have the same activity",
          "D. Storage conditions have no effect"
        ],
        answer: "B"
      },
      {
        id: "DAP-39",
        type: "fill_blank",
        question: "The extraction of morphine from opium by Sertürner marked the beginning of isolating active principles in __________ pure form.",
        answer: "chemically"
      },
      {
        id: "DAP-40",
        type: "short_answer",
        question: "Give one example of a dried plant product (besides opium) that could be called a drug in the original sense.",
        answer: "Dried leaves of peppermint / dried lime blossoms / dried flowers and leaves of female cannabis plant"
      },
      {
        id: "DAP-41",
        type: "true_false_not_given",
        question: "The text suggests that using crude natural products is always preferable to pure compounds.",
        answer: "FALSE",
        explanation: "The aims of isolation emphasize advantages of pure compounds (precise dosage, synthesis, SAR, etc.)."
      },
      {
        id: "DAP-42",
        type: "multiple_choice",
        question: "Pharmacokinetics refers to:",
        options: [
          "A. Only the therapeutic effect",
          "B. The fate of the drug in the body (absorption, distribution, metabolism, excretion)",
          "C. Only toxicity",
          "D. Only receptor binding"
        ],
        answer: "B"
      },
      {
        id: "DAP-43",
        type: "short_answer",
        question: "What is the main problem when administering a natural product or extract?",
        answer: "Administration of multiple substances with possibly different activities + variable dosage of individual constituents"
      },
      {
        id: "DAP-44",
        type: "true_false_not_given",
        question: "Carfentanyl is used in human clinical anesthesia.",
        answer: "NOT GIVEN",
        explanation: "The text only mentions its use in veterinary anesthesia of large animals."
      },
      {
        id: "DAP-45",
        type: "fill_blank",
        question: "Starting with the extraction of morphine from opium in 1804, the active principles of many other natural products were subsequently isolated in chemically __________ form.",
        answer: "pure"
      }
    ]
  },

  // ============================================================
  // SECTION 3: Drug Development
  // ============================================================
  drugDevelopment: {
    title: "Drug Development",
    source: "Color Atlas of Pharmacology – Thieme",
    questions: [
      {
        id: "DD-01",
        type: "true_false_not_given",
        question: "The drug development process starts with the synthesis of novel chemical compounds.",
        answer: "TRUE",
        explanation: "First sentence of the text."
      },
      {
        id: "DD-02",
        type: "true_false_not_given",
        question: "Only synthetic compounds are used as sources for new drugs; natural sources are no longer important.",
        answer: "FALSE",
        explanation: "The text lists plants, animal tissues, microbial cultures, human cell cultures, and gene technology as sources."
      },
      {
        id: "DD-03",
        type: "true_false_not_given",
        question: "Preclinical testing is sufficient to fully replicate complex biological processes in the intact organism.",
        answer: "FALSE",
        explanation: "The text states that models (cell cultures, isolated organs, etc.) invariably fall short of replicating complex processes; whole-animal testing is required."
      },
      {
        id: "DD-04",
        type: "true_false_not_given",
        question: "Only a very small fraction of new compounds prove potentially fit for use in humans at the preclinical stage.",
        answer: "TRUE",
        explanation: "Explicitly stated."
      },
      {
        id: "DD-05",
        type: "true_false_not_given",
        question: "Phase I clinical trials are conducted on selected patients with the target disease.",
        answer: "FALSE",
        explanation: "Phase I is on healthy subjects; Phase II is on selected patients."
      },
      {
        id: "DD-06",
        type: "true_false_not_given",
        question: "Ultimately, only one new drug typically remains from some 10,000 newly synthesized substances.",
        answer: "TRUE",
        explanation: "Directly stated."
      },
      {
        id: "DD-07",
        type: "true_false_not_given",
        question: "Clinical trials do not require ethical review.",
        answer: "FALSE",
        explanation: "They are subject to review and approval by institutional ethics committees according to international codes (Helsinki, Tokyo, Venice)."
      },
      {
        id: "DD-08",
        type: "true_false_not_given",
        question: "After approval, regulatory surveillance continues in the form of Phase IV studies.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "DD-09",
        type: "true_false_not_given",
        question: "The FDA is the regulatory body in the United States.",
        answer: "TRUE",
        explanation: "Mentioned."
      },
      {
        id: "DD-10",
        type: "true_false_not_given",
        question: "If a new drug offers hardly any advantage over existing ones, the cost–benefit relationship can be ignored.",
        answer: "FALSE",
        explanation: "The text says the cost–benefit relationship needs to be kept in mind."
      },

      // Multiple Choice
      {
        id: "DD-11",
        type: "multiple_choice",
        question: "Which of the following is an example of a drug obtained by gene technology?",
        options: [
          "A. Penicillin G",
          "B. Heparin",
          "C. Human insulin",
          "D. Cardiac glycosides"
        ],
        answer: "C"
      },
      {
        id: "DD-12",
        type: "multiple_choice",
        question: "Toxicological investigations evaluate all of the following EXCEPT:",
        options: [
          "A. Acute or chronic toxicity",
          "B. Genotoxicity / mutagenicity",
          "C. Therapeutic efficacy in patients",
          "D. Carcinogenicity and teratogenicity"
        ],
        answer: "C"
      },
      {
        id: "DD-13",
        type: "multiple_choice",
        question: "Phase I studies mainly aim to determine:",
        options: [
          "A. Therapeutic efficacy in large patient groups",
          "B. Effects on body functions, dose definition, and pharmacokinetics in healthy subjects",
          "C. Comparison with standard therapy",
          "D. Long-term benefit–risk ratio"
        ],
        answer: "B"
      },
      {
        id: "DD-14",
        type: "multiple_choice",
        question: "Phase III involves:",
        options: [
          "A. Only healthy volunteers",
          "B. A larger group of patients compared with conventional treatments",
          "C. Only animal testing",
          "D. Only in-vitro assays"
        ],
        answer: "B"
      },
      {
        id: "DD-15",
        type: "multiple_choice",
        question: "Which regulatory body is mentioned for the European Union?",
        options: [
          "A. FDA",
          "B. Health Protection Branch Drugs Directorate",
          "C. EU Commission in conjunction with the European Agency for the Evaluation of Medicinal Products",
          "D. WHO"
        ],
        answer: "C"
      },
      {
        id: "DD-16",
        type: "multiple_choice",
        question: "Initial screening in preclinical testing may employ:",
        options: [
          "A. Only whole-animal experiments",
          "B. Receptor binding assays, cell cultures, isolated cells and organs",
          "C. Only Phase III trials",
          "D. Only post-marketing studies"
        ],
        answer: "B"
      },
      {
        id: "DD-17",
        type: "multiple_choice",
        question: "According to the figure description, approximately how many substances enter Phase 1 from the original 10,000?",
        options: [
          "A. 1000",
          "B. 100",
          "C. 10",
          "D. 1"
        ],
        answer: "C"
      },
      {
        id: "DD-18",
        type: "multiple_choice",
        question: "The final long-term benefit–risk evaluation occurs during:",
        options: [
          "A. Preclinical testing",
          "B. Phase I",
          "C. Phase III",
          "D. Phase IV / general use"
        ],
        answer: "D"
      },

      // Matching & Short Answer
      {
        id: "DD-19",
        type: "matching",
        question: "Match the clinical trial phase with its main characteristics:",
        pairs: [
          { left: "Phase 1", right: "Healthy subjects; effects on body functions, dose, pharmacokinetics" },
          { left: "Phase 2", right: "Selected patients; effects on disease, safety, efficacy, dose" },
          { left: "Phase 3", right: "Larger patient groups; comparison with standard therapy" },
          { left: "Phase 4", right: "Post-approval; long-term benefit–risk evaluation" }
        ],
        answer: "See pairs"
      },
      {
        id: "DD-20",
        type: "short_answer",
        question: "Name four possible sources of substances with complex structures for drug development.",
        answer: "Plants (e.g. cardiac glycosides), animal tissues (heparin), microbial cultures (penicillin G), human cell cultures (urokinase), gene technology (human insulin)"
      },
      {
        id: "DD-21",
        type: "short_answer",
        question: "What four types of toxicity are evaluated in toxicological investigations?",
        answer: "1. Toxicity associated with acute or chronic administration; 2. Genetic damage (genotoxicity, mutagenicity); 3. Production of tumors (oncogenicity/carcinogenicity); 4. Causation of birth defects (teratogenicity)"
      },
      {
        id: "DD-22",
        type: "fill_blank",
        question: "Only animal experiments can reveal whether the desired effects will actually occur at dosages that produce little or no __________.",
        answer: "toxicity"
      },
      {
        id: "DD-23",
        type: "true_false_not_given",
        question: "Pharmaceutical technology provides the methods for drug formulation.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "DD-24",
        type: "multiple_choice",
        question: "During clinical testing, many drugs are revealed to be:",
        options: [
          "A. Always successful",
          "B. Unusable",
          "C. More potent than expected",
          "D. Completely non-toxic"
        ],
        answer: "B"
      },
      {
        id: "DD-25",
        type: "short_answer",
        question: "What must applicants document when submitting a new drug for approval?",
        answer: "That the criteria of efficacy and safety have been met and that product forms satisfy general standards of quality control"
      },
      {
        id: "DD-26",
        type: "true_false_not_given",
        question: "Structure–activity relationships help focus the search for new agents.",
        answer: "TRUE",
        explanation: "Stated: as more insight is gained into SAR, the search becomes more clearly focused."
      },
      {
        id: "DD-27",
        type: "fill_blank",
        question: "In animals, compounds under investigation also have to be studied with respect to their absorption, distribution, metabolism, and elimination (__________).",
        answer: "pharmacokinetics"
      },
      {
        id: "DD-28",
        type: "multiple_choice",
        question: "Which international declarations are mentioned regarding ethical conduct of clinical trials?",
        options: [
          "A. Geneva, Paris, Rome",
          "B. Helsinki, Tokyo, and Venice",
          "C. London, Berlin, Madrid",
          "D. New York, Geneva, Basel"
        ],
        answer: "B"
      },
      {
        id: "DD-29",
        type: "short_answer",
        question: "What happens after a new drug is approved?",
        answer: "It may be marketed under a trade name and become available for prescription; post-licensing (Phase IV) surveillance continues."
      },
      {
        id: "DD-30",
        type: "true_false_not_given",
        question: "The text claims that every new drug offers clear advantages over existing treatments.",
        answer: "FALSE",
        explanation: "It notes that if a new drug offers hardly any advantage, the cost–benefit relationship needs to be considered."
      },
      {
        id: "DD-31",
        type: "multiple_choice",
        question: "Heparin is given as an example of a substance obtained from:",
        options: [
          "A. Plants",
          "B. Animal tissues",
          "C. Microbial cultures",
          "D. Gene technology"
        ],
        answer: "B"
      },
      {
        id: "DD-32",
        type: "fill_blank",
        question: "Even at the level of preclinical testing, only a very small __________ of new compounds will prove potentially fit for use in humans.",
        answer: "fraction"
      },
      {
        id: "DD-33",
        type: "short_answer",
        question: "Name the three main stages after synthesis before a drug reaches general use.",
        answer: "Preclinical testing → Clinical trials (Phases 1–3) → Approval → Phase 4 / general use"
      },
      {
        id: "DD-34",
        type: "true_false_not_given",
        question: "Receptor binding assays are mentioned as one possible method of initial screening.",
        answer: "TRUE",
        explanation: "Mentioned under biochemical-pharmacological investigations."
      },
      {
        id: "DD-35",
        type: "multiple_choice",
        question: "The decision to approve a new drug is made by:",
        options: [
          "A. The pharmaceutical company itself",
          "B. A national regulatory body",
          "C. Individual physicians",
          "D. The World Health Organization only"
        ],
        answer: "B"
      },
      {
        id: "DD-36",
        type: "short_answer",
        question: "What is the approximate success rate implied by the 10,000 → 1 ratio?",
        answer: "Extremely low; only about 0.01% of newly synthesized substances become new drugs"
      },
      {
        id: "DD-37",
        type: "true_false_not_given",
        question: "Phase II is the first time a potential drug is tested on patients.",
        answer: "TRUE",
        explanation: "Phase I is healthy subjects; Phase II is selected patients."
      },
      {
        id: "DD-38",
        type: "fill_blank",
        question: "Applicants must document by means of appropriate test data that the criteria of __________ and safety have been met.",
        answer: "efficacy"
      },
      {
        id: "DD-39",
        type: "multiple_choice",
        question: "Urokinase is given as an example obtained from:",
        options: [
          "A. Plants",
          "B. Microbial cultures",
          "C. Cultures of human cells",
          "D. Chemical synthesis only"
        ],
        answer: "C"
      },
      {
        id: "DD-40",
        type: "short_answer",
        question: "Why must potential drugs be tested in the whole animal?",
        answer: "Because in-vitro and isolated-organ models fall short of replicating complex biological processes in the intact organism; only animal experiments can show whether desired effects occur at non-toxic dosages."
      },
      {
        id: "DD-41",
        type: "true_false_not_given",
        question: "The text mentions that long-term experience is necessary to properly assess the risk–benefit ratio.",
        answer: "TRUE",
        explanation: "Stated regarding Phase IV / general use."
      },
      {
        id: "DD-42",
        type: "multiple_choice",
        question: "Which of the following is NOT a focus of Phase 1 according to the figure description?",
        options: [
          "A. Effects on body functions",
          "B. Dose definition",
          "C. Comparison with standard therapy",
          "D. Pharmacokinetics"
        ],
        answer: "C"
      },
      {
        id: "DD-43",
        type: "fill_blank",
        question: "As more insight is gained into structure–activity relationships, the search for new agents becomes more clearly __________.",
        answer: "focused"
      },
      {
        id: "DD-44",
        type: "short_answer",
        question: "List the main components of preclinical testing mentioned.",
        answer: "Biochemical-pharmacological investigations (e.g. receptor binding), experiments on cell cultures / isolated cells / organs, whole-animal testing, toxicological investigations, pharmacokinetic studies"
      },
      {
        id: "DD-45",
        type: "true_false_not_given",
        question: "Once a drug is approved, no further evaluation of its risk–benefit ratio is needed.",
        answer: "FALSE",
        explanation: "Phase IV and long-term experience are required for proper assessment."
      }
    ]
  },

  // ============================================================
  // SECTION 4: Search for Prototypes / Lead Compounds
  // ============================================================
  searchForPrototypes: {
    title: "Search for Prototypes (Lead Compounds)",
    source: "Pharmaceutical Chemistry textbook chapter 3",
    questions: [
      {
        id: "SP-01",
        type: "true_false_not_given",
        question: "A lead compound must already be suitable for clinical use.",
        answer: "FALSE",
        explanation: "The lead compound is not intended to be used in clinical practice; it is only the starting point."
      },
      {
        id: "SP-02",
        type: "true_false_not_given",
        question: "The level of biological activity of a lead compound must be particularly high.",
        answer: "FALSE",
        explanation: "The level of biological activity may not be particularly noticeable; this is not a fundamental issue."
      },
      {
        id: "SP-03",
        type: "true_false_not_given",
        question: "It does not matter whether a lead compound is toxic or has side effects.",
        answer: "TRUE",
        explanation: "Explicitly stated."
      },
      {
        id: "SP-04",
        type: "true_false_not_given",
        question: "One fundamental objective of pharmaceutical chemistry is to search for drugs that are more potent, more selective, and less toxic.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "SP-05",
        type: "true_false_not_given",
        question: "Lead compounds can only be obtained from natural sources.",
        answer: "FALSE",
        explanation: "They can come from natural sources (flora and fauna) or synthetic compounds prepared in the laboratory."
      },
      {
        id: "SP-06",
        type: "true_false_not_given",
        question: "Morphine is given as an example of an early natural lead compound.",
        answer: "TRUE",
        explanation: "Mentioned as a natural compound derived from plants."
      },
      {
        id: "SP-07",
        type: "true_false_not_given",
        question: "All chemical messengers (neurotransmitters) of the human body have already been identified.",
        answer: "FALSE",
        explanation: "Many chemical messengers are still unknown because they are present in very small amounts or have short half-lives."
      },
      {
        id: "SP-08",
        type: "true_false_not_given",
        question: "Advances in genomics and proteomics have revealed many new potential biological targets (orphan receptors).",
        answer: "TRUE",
        explanation: "Stated in the continuation of the chapter."
      },
      {
        id: "SP-09",
        type: "true_false_not_given",
        question: "Screening of natural products is described as one of the most costly and least efficient procedures.",
        answer: "TRUE",
        explanation: "Described as one of the most costly and least active procedures."
      },
      {
        id: "SP-10",
        type: "true_false_not_given",
        question: "Chloramphenicol was discovered through a general microorganism screening programme.",
        answer: "TRUE",
        explanation: "Isolated from Streptomyces venezuelae in the Parke-Davis screening programme."
      },

      // Multiple Choice
      {
        id: "SP-11",
        type: "multiple_choice",
        question: "A lead compound is best defined as:",
        options: [
          "A. A drug ready for clinical use",
          "B. A compound that can be considered therapeutically useful as a starting point for development",
          "C. A compound that must be non-toxic",
          "D. A compound that must have very high potency"
        ],
        answer: "B"
      },
      {
        id: "SP-12",
        type: "multiple_choice",
        question: "Why do many potential biological targets remain “hidden”?",
        options: [
          "A. They do not exist",
          "B. Their natural chemical messengers are present in very small amounts or have short half-lives",
          "C. Scientists are not interested in them",
          "D. They only exist in animals"
        ],
        answer: "B"
      },
      {
        id: "SP-13",
        type: "multiple_choice",
        question: "Quinine is described as a natural alkaloid with which properties?",
        options: [
          "A. Only analgesic",
          "B. Antipyretic, anti-malarial, and analgesic",
          "C. Only antibiotic",
          "D. Only antihypertensive"
        ],
        answer: "B"
      },
      {
        id: "SP-14",
        type: "multiple_choice",
        question: "Enkephalins and endorphins are examples of:",
        options: [
          "A. Synthetic analgesics",
          "B. Natural analgesics (peptides/proteins) of the body itself",
          "C. Plant alkaloids",
          "D. Antibiotics"
        ],
        answer: "B"
      },
      {
        id: "SP-15",
        type: "multiple_choice",
        question: "Orphan receptors are:",
        options: [
          "A. Receptors with well-known natural ligands",
          "B. New targets without known leading compounds that interact with them",
          "C. Receptors only found in plants",
          "D. Receptors that are no longer studied"
        ],
        answer: "B"
      },
      {
        id: "SP-16",
        type: "multiple_choice",
        question: "Most biologically active natural products are:",
        options: [
          "A. Primary metabolites",
          "B. Secondary metabolites",
          "C. Proteins only",
          "D. Inorganic compounds"
        ],
        answer: "B"
      },
      {
        id: "SP-17",
        type: "multiple_choice",
        question: "The compound responsible for the biological activity of a natural source is known as the:",
        options: [
          "A. Lead compound only",
          "B. Active principle",
          "C. Prodrug",
          "D. Metabolite"
        ],
        answer: "B"
      },

      // Short Answer & Fill
      {
        id: "SP-18",
        type: "short_answer",
        question: "What are the two main goals stated at the beginning of the chapter “Search for prototypes”?",
        answer: "1. To know the global process through which new prototypes or serial heads are discovered and the methodologies used over time. 2. To know the importance of isolation, purification and structural determination of drugs."
      },
      {
        id: "SP-19",
        type: "short_answer",
        question: "Why is the high number and great structural diversity of drugs a difficulty for students of pharmaceutical chemistry?",
        answer: "Because of the large number of structures that need to be memorized."
      },
      {
        id: "SP-20",
        type: "fill_blank",
        question: "If a drug or poison produces a biological effect it is because there must be a __________ target in the body.",
        answer: "molecular"
      },
      {
        id: "SP-21",
        type: "short_answer",
        question: "Give two examples of natural lead compounds mentioned.",
        answer: "Morphine and quinine (also enkephalins/endorphins as endogenous examples)"
      },
      {
        id: "SP-22",
        type: "true_false_not_given",
        question: "The authors decided to minimize the number of structures presented in the general chapters.",
        answer: "TRUE",
        explanation: "Stated in order to facilitate learning."
      },
      {
        id: "SP-23",
        type: "multiple_choice",
        question: "Chemical messengers or neurotransmitters generally have:",
        options: [
          "A. Very long half-lives",
          "B. Short lifespan",
          "C. No specific cellular targets",
          "D. Only toxic effects"
        ],
        answer: "B"
      },
      {
        id: "SP-24",
        type: "fill_blank",
        question: "The current challenge with orphan receptors is to find chemical compounds that interact with each of these targets to discover what their __________ are.",
        answer: "functions"
      },
      {
        id: "SP-25",
        type: "short_answer",
        question: "What is the name of the antibiotic isolated from Streptomyces venezuelae mentioned as a successful screening example?",
        answer: "Chloramphenicol"
      },
      {
        id: "SP-26",
        type: "true_false_not_given",
        question: "Natural products are an important source of biologically active compounds.",
        answer: "TRUE",
        explanation: "Explicitly stated."
      },
      {
        id: "SP-27",
        type: "multiple_choice",
        question: "The active principle of a natural source can act as a:",
        options: [
          "A. Final drug only",
          "B. Leader (lead) compound",
          "C. Inactive metabolite",
          "D. Solvent"
        ],
        answer: "B"
      },
      {
        id: "SP-28",
        type: "short_answer",
        question: "What has changed the whole picture of new drug development according to the text?",
        answer: "Advances in genomics and proteomics (genome projects discovering large numbers of new proteins that are biological targets)"
      },
      {
        id: "SP-29",
        type: "fill_blank",
        question: "Many of the earliest known drugs are natural compounds derived from plants that coincidentally interacted with a molecular target of the __________ body.",
        answer: "human"
      },
      {
        id: "SP-30",
        type: "true_false_not_given",
        question: "The lead compound is the final clinically useful compound.",
        answer: "FALSE",
        explanation: "It is only the starting derivative from which a clinically useful compound can be developed."
      },
      {
        id: "SP-31",
        type: "multiple_choice",
        question: "Screening involves subjecting a large number of chemical compounds to:",
        options: [
          "A. Only chemical analysis",
          "B. A battery of pharmacological tests",
          "C. Only clinical trials",
          "D. Only animal toxicity tests"
        ],
        answer: "B"
      },
      {
        id: "SP-32",
        type: "short_answer",
        question: "Why have few chemical messengers been identified?",
        answer: "They are present in very small amounts or have such a short half-life that isolation is not possible."
      },
      {
        id: "SP-33",
        type: "true_false_not_given",
        question: "The text suggests that mass screening is the most efficient modern method of drug discovery.",
        answer: "FALSE",
        explanation: "It is described as one of the most costly and least active procedures, although it has been successful in some fields."
      },
      {
        id: "SP-34",
        type: "fill_blank",
        question: "Lead compounds can be obtained from a variety of natural sources, such as __________ and fauna, or synthetic compounds.",
        answer: "flora"
      },
      {
        id: "SP-35",
        type: "short_answer",
        question: "What is the fundamental starting requirement for a pharmaceutical chemistry project?",
        answer: "To have a leader (lead compound) that can be considered as therapeutically useful"
      },
      {
        id: "SP-36",
        type: "multiple_choice",
        question: "Since the 1970s a great variety of which endogenous substances acting as natural analgesics have been discovered?",
        options: [
          "A. Steroids",
          "B. Peptides and proteins (enkephalins and endorphins)",
          "C. Alkaloids only",
          "D. Volatile oils"
        ],
        answer: "B"
      },
      {
        id: "SP-37",
        type: "true_false_not_given",
        question: "The chemical structures detailed in the general chapters will be studied again in the descriptive themes of Volume 2.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "SP-38",
        type: "short_answer",
        question: "What does the existence of a biological effect of a drug or poison imply?",
        answer: "That there must be a molecular target in the body with which it interacts"
      },
      {
        id: "SP-39",
        type: "fill_blank",
        question: "The authors decided to minimize the number of structures to facilitate the __________ of this discipline.",
        answer: "learning"
      },
      {
        id: "SP-40",
        type: "true_false_not_given",
        question: "All potential biological targets of the human body already have known natural chemical messengers.",
        answer: "FALSE",
        explanation: "Many remain unknown; this is why orphan receptors exist."
      },
      {
        id: "SP-41",
        type: "multiple_choice",
        question: "Chloramphenicol was isolated from:",
        options: [
          "A. A plant",
          "B. Streptomyces venezuelae",
          "C. An animal tissue",
          "D. Chemical synthesis only"
        ],
        answer: "B"
      },
      {
        id: "SP-42",
        type: "short_answer",
        question: "What is the main disadvantage of the mass screening approach mentioned?",
        answer: "It is one of the most costly and least active (efficient) procedures"
      },
      {
        id: "SP-43",
        type: "true_false_not_given",
        question: "The text presents morphine and quinine as examples of lead compounds.",
        answer: "TRUE",
        explanation: "They appear in Fig. 3.1 as lead compounds."
      },
      {
        id: "SP-44",
        type: "fill_blank",
        question: "Pharmaceutical chemistry is facing new targets without leading compounds; such targets have been defined as __________ receptors.",
        answer: "orphan"
      },
      {
        id: "SP-45",
        type: "short_answer",
        question: "Summarize the traditional vs. current challenge in finding lead compounds.",
        answer: "Traditionally, leads came from natural products with observed biological effects. Currently, genomics/proteomics have revealed many new targets (orphan receptors) without known natural ligands, so the challenge is to find compounds that interact with them."
      }
    ]
  },

  // ============================================================
  // SECTION 5: Alkaloids (based on available text)
  // ============================================================
  alkaloids: {
    title: "Drugs Containing Alkaloids",
    source: "Chapter 15 – Drugs Containing Alkaloids",
    questions: [
      {
        id: "ALK-01",
        type: "true_false_not_given",
        question: "Alkaloids are one of the largest groups of chemicals produced by plants.",
        answer: "TRUE",
        explanation: "First sentence of the introduction."
      },
      {
        id: "ALK-02",
        type: "true_false_not_given",
        question: "More than 10,000 different alkaloids have been discovered.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "ALK-03",
        type: "true_false_not_given",
        question: "All alkaloids contain a nitrogen atom within a carbon ring.",
        answer: "FALSE",
        explanation: "In some alkaloids such as mescaline the nitrogen atom is not within a carbon ring."
      },
      {
        id: "ALK-04",
        type: "true_false_not_given",
        question: "Alkaloids often have a bitter taste.",
        answer: "TRUE",
        explanation: "Most alkaloids have a very bitter taste."
      },
      {
        id: "ALK-05",
        type: "true_false_not_given",
        question: "The name “alkaloid” derives from their alkaline properties.",
        answer: "TRUE",
        explanation: "Their amine character produces an alkaline solution in water; the name originates from this."
      },
      {
        id: "ALK-06",
        type: "true_false_not_given",
        question: "Alkaloids occur only in plants.",
        answer: "FALSE",
        explanation: "They are also found in animals (e.g. shellfish) and fungi."
      },
      {
        id: "ALK-07",
        type: "true_false_not_given",
        question: "Many alkaloids are poisonous, yet some are used in medicine as analgesics or anaesthetics.",
        answer: "TRUE",
        explanation: "Examples given: strychnine or coniine are poisonous; morphine and codeine are used as analgesics."
      },
      {
        id: "ALK-08",
        type: "true_false_not_given",
        question: "Alkaloids have structural similarities with neurotransmitters such as dopamine, serotonin and acetylcholine.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "ALK-09",
        type: "true_false_not_given",
        question: "The first alkaloids were reproducibly isolated and analysed only in the early nineteenth century.",
        answer: "TRUE",
        explanation: "Stated in the history section."
      },
      {
        id: "ALK-10",
        type: "true_false_not_given",
        question: "Alkaloids are usually extracted from their sources by treatment with bases.",
        answer: "FALSE",
        explanation: "They are extracted by treatment with acids (HCl, H2SO4, or organic acids)."
      },

      // Multiple Choice
      {
        id: "ALK-11",
        type: "multiple_choice",
        question: "Alkaloids are typically:",
        options: [
          "A. Acidic compounds",
          "B. Nitrogenous organic molecules with pharmacological effects",
          "C. Pure hydrocarbons",
          "D. Inorganic salts"
        ],
        answer: "B"
      },
      {
        id: "ALK-12",
        type: "multiple_choice",
        question: "Which of the following is NOT a typical clinical use of alkaloids mentioned?",
        options: [
          "A. Analgesics",
          "B. Antimalarials",
          "C. Antibiotics (broad-spectrum synthetic)",
          "D. Treatment of hypertension and mental disorders"
        ],
        answer: "C"
      },
      {
        id: "ALK-13",
        type: "multiple_choice",
        question: "Alkaloids mainly occur in plants as salts of:",
        options: [
          "A. Strong mineral acids only",
          "B. Common carboxylic acids (citric, lactic, oxalic, etc.)",
          "C. Only hydrochloric acid",
          "D. No salts – they are free bases"
        ],
        answer: "B"
      },
      {
        id: "ALK-14",
        type: "multiple_choice",
        question: "The term “alkaloid” is thought to have originated from the properties of which compound?",
        options: [
          "A. Quinine",
          "B. Morphine",
          "C. Caffeine",
          "D. Nicotine"
        ],
        answer: "B"
      },
      {
        id: "ALK-15",
        type: "multiple_choice",
        question: "Usually alkaloids are derivatives of:",
        options: [
          "A. Fatty acids",
          "B. Amino acids",
          "C. Sugars",
          "D. Steroids"
        ],
        answer: "B"
      },

      // Short Answer
      {
        id: "ALK-16",
        type: "short_answer",
        question: "Give two examples of poisonous alkaloids mentioned.",
        answer: "Strychnine and coniine"
      },
      {
        id: "ALK-17",
        type: "short_answer",
        question: "Name two alkaloids used as analgesics.",
        answer: "Morphine and codeine"
      },
      {
        id: "ALK-18",
        type: "fill_blank",
        question: "Alkaloids are renowned for their potent __________ activities.",
        answer: "pharmacological"
      },
      {
        id: "ALK-19",
        type: "short_answer",
        question: "In which plant parts can alkaloids be found?",
        answer: "Berries, bark, fruit, roots and leaves (and other parts)"
      },
      {
        id: "ALK-20",
        type: "true_false_not_given",
        question: "Tiny amounts of some alkaloids can immobilize an elephant or a rhinoceros.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "ALK-21",
        type: "multiple_choice",
        question: "Advances in which techniques led to the elucidation of the chemical structure of alkaloids?",
        options: [
          "A. Only distillation",
          "B. Chromatography and mass spectroscopy",
          "C. Only crystallization",
          "D. Only biological assays"
        ],
        answer: "B"
      },
      {
        id: "ALK-22",
        type: "short_answer",
        question: "What is the origin of the name “alkaloid”?",
        answer: "From “alkaline”; originally used to describe any nitrogen-containing base (amine). Morphine had similar properties to basic salts from alkali ashes of plants → “vegetable alkali” or alkaloid."
      },
      {
        id: "ALK-23",
        type: "true_false_not_given",
        question: "Alkaloids have been used by humanity for thousands of years.",
        answer: "TRUE",
        explanation: "Evidence suggests use by ancient Sumerians and Egyptians."
      },
      {
        id: "ALK-24",
        type: "fill_blank",
        question: "The precise position of the __________ atom affects the properties of these alkaloids.",
        answer: "nitrogen"
      },
      {
        id: "ALK-25",
        type: "multiple_choice",
        question: "Which of the following is an example of an alkaloid in which nitrogen is not inside a carbon ring?",
        options: [
          "A. Morphine",
          "B. Mescaline",
          "C. Quinine",
          "D. Codeine"
        ],
        answer: "B"
      },
      {
        id: "ALK-26",
        type: "short_answer",
        question: "List at least five carboxylic acids whose salts of alkaloids commonly occur in plants.",
        answer: "Citric, lactic, oxalic, acetic, maleic, tartaric, fumaric, benzoic, aconitic, veratric acids"
      },
      {
        id: "ALK-27",
        type: "true_false_not_given",
        question: "All alkaloids are used only for their toxic effects.",
        answer: "FALSE",
        explanation: "Many have important clinical uses (analgesics, antimalarials, etc.)."
      },
      {
        id: "ALK-28",
        type: "fill_blank",
        question: "Alkaloids can be extracted from their sources by treatment with __________ (usually hydrochloric or sulphuric acid).",
        answer: "acids"
      },
      {
        id: "ALK-29",
        type: "short_answer",
        question: "What serious problem can arise from the use of alkaloids by people ignorant of their properties?",
        answer: "Serious addictions (and also the development of powerful painkillers and spiritual drugs)"
      },
      {
        id: "ALK-30",
        type: "true_false_not_given",
        question: "Alkaloids occur mainly in seed-bearing plants.",
        answer: "TRUE",
        explanation: "Stated in the definition section."
      },
      {
        id: "ALK-31",
        type: "multiple_choice",
        question: "The amazing effect of alkaloids on humans has led to the development of:",
        options: [
          "A. Only agricultural chemicals",
          "B. Powerful painkiller medications, spiritual drugs, and serious addictions",
          "C. Only food additives",
          "D. Only industrial solvents"
        ],
        answer: "B"
      },
      {
        id: "ALK-32",
        type: "short_answer",
        question: "Name two plant genera mentioned as sources of alkaloids.",
        answer: "Vinca and Datura (among many others)"
      },
      {
        id: "ALK-33",
        type: "true_false_not_given",
        question: "Prior to approximately 300 years ago, malaria was the scourge of Europe.",
        answer: "TRUE",
        explanation: "Stated at the beginning of the history continuation."
      },
      {
        id: "ALK-34",
        type: "fill_blank",
        question: "Alkaloids are nitrogen __________ which occur mainly in plants as their salts of common carboxylic acids.",
        answer: "heterocycles"
      },
      {
        id: "ALK-35",
        type: "short_answer",
        question: "Why is the position of the nitrogen atom important?",
        answer: "It is the precise position of the nitrogen atom that affects the properties of these alkaloids."
      },
      {
        id: "ALK-36",
        type: "true_false_not_given",
        question: "Alkaloids are secondary metabolites.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "ALK-37",
        type: "multiple_choice",
        question: "Which statement about alkaloid taste is correct?",
        options: [
          "A. Most are sweet",
          "B. Most have a very bitter taste",
          "C. They are tasteless",
          "D. Taste varies randomly with no pattern"
        ],
        answer: "B"
      },
      {
        id: "ALK-38",
        type: "short_answer",
        question: "What analytical advances allowed structure elucidation of alkaloids?",
        answer: "Chromatography and mass spectroscopy (and related separation techniques)"
      },
      {
        id: "ALK-39",
        type: "true_false_not_given",
        question: "The text claims that no alkaloids have clinical use because they are all too toxic.",
        answer: "FALSE",
        explanation: "Many have important clinical uses despite toxicity of some members."
      },
      {
        id: "ALK-40",
        type: "fill_blank",
        question: "Even though many alkaloids are poisonous, some are used in medicine as analgesics (pain relievers) or __________.",
        answer: "anaesthetics"
      }
    ]
  },

  // ============================================================
  // SECTION 6: Volatile Oils (Essential Oils)
  // ============================================================
  volatileOils: {
    title: "Drugs Containing Volatile Oils",
    source: "Chapter 17 – Volatile oils",
    questions: [
      {
        id: "VO-01",
        type: "true_false_not_given",
        question: "Volatile oils evaporate when exposed to air at ordinary temperature.",
        answer: "TRUE",
        explanation: "Definition given."
      },
      {
        id: "VO-02",
        type: "true_false_not_given",
        question: "Volatile oils are also known as essential oils or ethereal oils.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "VO-03",
        type: "true_false_not_given",
        question: "In all cases the volatile oil preexists in the plant.",
        answer: "FALSE",
        explanation: "In a few cases it is formed by decomposition of a glycoside (e.g. mustard)."
      },
      {
        id: "VO-04",
        type: "true_false_not_given",
        question: "Volatile oils are freely soluble in water.",
        answer: "FALSE",
        explanation: "They are insoluble in water; soluble in ether, chloroform and fairly soluble in alcohol."
      },
      {
        id: "VO-05",
        type: "true_false_not_given",
        question: "Volatile oils leave a permanent grease spot on filter paper.",
        answer: "FALSE",
        explanation: "Unlike fixed oils, they do not leave a permanent grease spot."
      },
      {
        id: "VO-06",
        type: "true_false_not_given",
        question: "Most volatile oils are optically active and have a high refractive index.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "VO-07",
        type: "true_false_not_given",
        question: "Volatile oils become darker when exposed to air and direct sunlight due to oxidation.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "VO-08",
        type: "true_false_not_given",
        question: "Clove oil is lighter than water.",
        answer: "FALSE",
        explanation: "The text notes that clove oil is heavier than water."
      },
      {
        id: "VO-09",
        type: "true_false_not_given",
        question: "Volatile oils are chemically derived mainly from terpenes (mono- and sesquiterpenes) and their oxygenated derivatives.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "VO-10",
        type: "true_false_not_given",
        question: "Whole black mustard seeds are odourless until crushed with water.",
        answer: "TRUE",
        explanation: "Because the oil is formed by enzymatic decomposition of sinigrin."
      },

      // Multiple Choice
      {
        id: "VO-11",
        type: "multiple_choice",
        question: "Volatile oils are classified on the basis of:",
        options: [
          "A. Colour only",
          "B. Functional groups present",
          "C. Boiling point only",
          "D. Botanical family only"
        ],
        answer: "B"
      },
      {
        id: "VO-12",
        type: "multiple_choice",
        question: "Which group does turpentine oil belong to?",
        options: [
          "A. Alcohols",
          "B. Hydrocarbons",
          "C. Aldehydes",
          "D. Phenols"
        ],
        answer: "B"
      },
      {
        id: "VO-13",
        type: "multiple_choice",
        question: "Peppermint oil and sandalwood oil are examples of volatile oils containing mainly:",
        options: [
          "A. Hydrocarbons",
          "B. Alcohols",
          "C. Aldehydes",
          "D. Ketones"
        ],
        answer: "B"
      },
      {
        id: "VO-14",
        type: "multiple_choice",
        question: "Cinnamon, cassia and lemongrass oils are rich in:",
        options: [
          "A. Phenols",
          "B. Aldehydes",
          "C. Esters",
          "D. Oxides"
        ],
        answer: "B"
      },
      {
        id: "VO-15",
        type: "multiple_choice",
        question: "Clove, ajowan and tulsi oils are examples of the __________ group.",
        options: [
          "A. Ketones",
          "B. Phenols",
          "C. Esters",
          "D. Hydrocarbons"
        ],
        answer: "B"
      },
      {
        id: "VO-16",
        type: "multiple_choice",
        question: "The two principal methods of scarification for citrus oils are:",
        options: [
          "A. Steam and water distillation",
          "B. Sponge and ecuelle methods",
          "C. Solvent extraction and expression",
          "D. Enfleurage and maceration"
        ],
        answer: "B"
      },
      {
        id: "VO-17",
        type: "multiple_choice",
        question: "Volatile oils from fresh materials are preferably separated by:",
        options: [
          "A. Only solvent extraction",
          "B. Hydrodistillation",
          "C. Only scarification",
          "D. Only expression"
        ],
        answer: "B"
      },
      {
        id: "VO-18",
        type: "multiple_choice",
        question: "The main constituent of the essential oil of mustard formed after crushing is:",
        options: [
          "A. Menthol",
          "B. Allyl isothiocyanate",
          "C. Eugenol",
          "D. Cineole"
        ],
        answer: "B"
      },

      // Matching & Short Answer
      {
        id: "VO-19",
        type: "matching",
        question: "Match the functional group class with example drugs/oils:",
        pairs: [
          { left: "Hydrocarbons", right: "Turpentine oil" },
          { left: "Alcohols", right: "Peppermint, sandalwood" },
          { left: "Aldehydes", right: "Lemongrass, cinnamon, cassia" },
          { left: "Ketones", right: "Camphor, caraway, dill, fennel" },
          { left: "Phenols", right: "Clove, ajowan, tulsi" },
          { left: "Oxides", right: "Eucalyptus, cardamom" },
          { left: "Esters", right: "Valerian, rosemary, gaultheria" }
        ],
        answer: "See pairs"
      },
      {
        id: "VO-20",
        type: "short_answer",
        question: "Why do whole black mustard seeds have no odour until crushed with water?",
        answer: "The volatile oil (allyl isothiocyanate) is formed by decomposition of the glycoside sinigrin by the enzyme myrosin; the glycoside and enzyme are in different cells and only meet when the seeds are crushed in the presence of water."
      },
      {
        id: "VO-21",
        type: "fill_blank",
        question: "Volatile oils represent the __________ of active constituents of the plant and hence are also known as essential oils.",
        answer: "essence"
      },
      {
        id: "VO-22",
        type: "short_answer",
        question: "Name three locations in plants where volatile oils may be stored.",
        answer: "Oil ducts of umbelliferous fruits, oil cells or oil glands in the sub-epidermal tissue of lemon/orange, mesophyll of eucalyptus leaves, trichomes of several plants"
      },
      {
        id: "VO-23",
        type: "true_false_not_given",
        question: "Volatile oils can dissolve many proximate principles such as fixed oils, fats, resins, camphor and free alkaloids.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "VO-24",
        type: "multiple_choice",
        question: "Scarification is mainly used for the preparation of oils from:",
        options: [
          "A. Leaves",
          "B. Citrus peels (lemon, orange, bergamot)",
          "C. Roots",
          "D. Seeds only"
        ],
        answer: "B"
      },
      {
        id: "VO-25",
        type: "short_answer",
        question: "What is the difference between hydrodistillation and steam distillation in the context of volatile oil extraction?",
        answer: "Hydrodistillation is used for fresh materials; steam distillation is used for air-dried parts. Fresh materials are preferred in either case."
      },
      {
        id: "VO-26",
        type: "true_false_not_given",
        question: "Volatile oils are saponified with alkalis like fixed oils.",
        answer: "FALSE",
        explanation: "Unlike fixed oils, they are not saponified with alkalis."
      },
      {
        id: "VO-27",
        type: "fill_blank",
        question: "Volatile oils are colourless liquids but become __________ when exposed to air and direct sunlight due to oxidation.",
        answer: "darker"
      },
      {
        id: "VO-28",
        type: "multiple_choice",
        question: "Eucalyptus oil belongs to which chemical group according to the classification table?",
        options: [
          "A. Phenols",
          "B. Oxides",
          "C. Esters",
          "D. Aldehydes"
        ],
        answer: "B"
      },
      {
        id: "VO-29",
        type: "short_answer",
        question: "List the main physical properties of volatile oils mentioned.",
        answer: "Odorous, evaporate at ordinary temperature, soluble in alcohol/organic solvents, insoluble in water, lighter than water (except clove oil), high refractive index, mostly optically active, colourless when fresh, darken on oxidation, do not leave permanent grease spot, not saponified by alkalis"
      },
      {
        id: "VO-30",
        type: "true_false_not_given",
        question: "The enzyme and glycoside responsible for mustard oil formation are located in the same cells.",
        answer: "FALSE",
        explanation: "They are contained in different cells of the seed tissue."
      },
      {
        id: "VO-31",
        type: "fill_blank",
        question: "In most instances the volatile oil is usually contained in some special __________ tissues.",
        answer: "secretory"
      },
      {
        id: "VO-32",
        type: "multiple_choice",
        question: "Which oil is given as an example of the phenolic ethers group?",
        options: [
          "A. Clove",
          "B. Nutmeg / Calamus",
          "C. Peppermint",
          "D. Turpentine"
        ],
        answer: "B"
      },
      {
        id: "VO-33",
        type: "short_answer",
        question: "What are the two main extraction techniques discussed?",
        answer: "Extraction by distillation (hydrodistillation / steam distillation) and extraction by scarification (sponge and ecuelle methods)"
      },
      {
        id: "VO-34",
        type: "true_false_not_given",
        question: "It is better to use air-dried materials rather than fresh materials for distillation.",
        answer: "FALSE",
        explanation: "The text states it is better to use fresh materials in either case."
      },
      {
        id: "VO-35",
        type: "fill_blank",
        question: "Volatile oils are freely soluble in ether and in chloroform and fairly soluble in __________.",
        answer: "alcohol"
      },
      {
        id: "VO-36",
        type: "multiple_choice",
        question: "Camphor, caraway and dill belong to which group?",
        options: [
          "A. Alcohols",
          "B. Ketones",
          "C. Phenols",
          "D. Esters"
        ],
        answer: "B"
      },
      {
        id: "VO-37",
        type: "short_answer",
        question: "Why are volatile oils also called “ethereal oils”?",
        answer: "Because they evaporate when exposed to air at ordinary temperature (like ether)."
      },
      {
        id: "VO-38",
        type: "true_false_not_given",
        question: "Volatile oils can be used to dissolve fixed oils, fats, resins and many free alkaloids.",
        answer: "TRUE",
        explanation: "Stated."
      },
      {
        id: "VO-39",
        type: "fill_blank",
        question: "The glycoside in mustard seeds is called __________ and the enzyme is myrosin.",
        answer: "sinigrin"
      },
      {
        id: "VO-40",
        type: "short_answer",
        question: "Name four chemical classes of volatile oils according to the classification table.",
        answer: "Hydrocarbons, alcohols, aldehydes, ketones, phenols, phenolic ethers, oxides, esters (any four)"
      }
    ]
  }
};

// Export for use in Node or browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = questionBank;
}

// Summary counts
const summary = Object.keys(questionBank).map(key => ({
  section: questionBank[key].title,
  count: questionBank[key].questions.length
}));

console.log("Question Bank Summary:");
console.table(summary);
console.log("Total questions:", summary.reduce((sum, s) => sum + s.count, 0));
