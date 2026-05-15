const TCF_QUESTIONS = [
  {
    id: 1,
    cat: 'sante',
    question: 'Selon certains, la vie rurale est plus bénéfique pour la santé que la vie urbaine. Quel est votre avis ?',
    scriptUrl: 'sante/urban_rural.html',
    date: '2025-05-05',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"     // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
    id: 2,
    cat: 'culture',
    question: 'Partir vivre à l\'étranger est plus facile quand on est jeune. Qu\'en pensez-vous ?',
    scriptUrl: 'culture/vivre_etranger_jeune.html',
    date: '2025-05-06',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"     // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
    id: 3,
    cat: 'famille',
    question: 'Pensez-vous que l\'on puisse être épanoui en vivant seul ? Pourquoi ?',
    scriptUrl: 'famille/epanoui_seul.html',
    date: '2025-05-06',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"     // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
    id: 4,
    cat: 'environnement',
    question: 'Selon vous, doit-on protéger tous les animaux en voie de disparition ? Pourquoi ?',
    scriptUrl: 'environnement/animaux_disparition.html',
    date: '2025-05-06',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"     // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
    id: 5,
    cat: 'education',
    question: 'Les universités doivent accepter tous les étudiants sans processus de sélection. Partagez-vous cette opinion ?',
    scriptUrl: 'education/selection_universitaire.html',
    date: '2025-05-07',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"     // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
    id: 6,
    cat: 'technologie',
    question: 'La présence de caméras dans les lieux publics améliore la sécurité des personnes. Êtes-vous d\'accord ?',
    scriptUrl: 'technologie/cameras_securite.html',
    date: '2025-05-07',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"  // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
    id: 7,
    cat: 'education',
    question: 'Il y a des parents qui décident de s\'occuper eux-mêmes de l\'éducation de leurs enfants à la maison. Quel est votre avis ?',
    scriptUrl: 'education/homeschool.html',
    date: '2025-05-08',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"  // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
    id: 8,
    cat: 'culture',
    question: 'De nombreuses personnes n\'apprécient pas de voyager seuls. Partagez-vous cette opinion ? Pourquoi ?',
    scriptUrl: 'culture/voyage_solo.html',
    date: '2026-05-09',
    stars: 0,          // Gérez vos étoiles ici (0 à 3)
    status: "À faire"  // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
  id: 9,
  cat: 'economique',
  question: 'Les ONG et les associations sont-elles les seules capables d\'aider les personnes pauvres ? Qu\'en pensez-vous ?',
  scriptUrl: 'economique/ong_pauvrete.html',
  date: '2026-05-10',
  stars: 0,          // Gérez vos étoiles ici (0 à 3)
  status: "À faire"  // Valeurs : "À faire", "En cours", "Prêt", "Maîtrisé"
  },
  {
  id: 10,
  cat: 'economique',
  question: 'Les employés sont-ils surtout motivés par leur salaire ? Pourquoi ?',
  scriptUrl: 'economique/salaire_motivation.html',
  date: '2026-05-10',
  stars: 2,
  status: "À faire"
  },
  {
  id: 11,
  cat: 'famille',
  question: 'Pensez-vous que l\'autorité soit indispensable pour bien éduquer les enfants ? Justifiez votre point de vue.',
  scriptUrl: 'famille/autorite_education.html',
  date: '2026-05-11',
  stars: 2,
  status: "Prêt"
  },
  {
  id: 12,
  cat: 'famille',
  question: 'À votre avis, est-ce que posséder un animal de compagnie est une bonne idée pour une personne âgée ?',
  scriptUrl: 'famille/animal_personne_agee.html',
  date: '2026-05-13',
  stars: 1,
  status: "À faire"
  },
  {
  id: 13,
  cat: 'technologie',
  question: 'Certaines personnes préfèrent vivre sans technologie (Internet, ordinateur, téléphone). Qu\'en pensez-vous ?',
  scriptUrl: 'technologie/sans_technologie.html',
  date: '2026-05-13',
  stars: 1,
  status: "À faire"
  },
  {
  id: 14,
  cat: 'travail',
  question: 'Le télétravail permet-il réellement de mieux concilier la vie professionnelle et la vie personnelle ? Qu\'en pensez-vous ?',
  scriptUrl: 'travail/teletravail_equilibre.html',
  date: '2026-05-13',
  stars: 1,
  status: "À faire"
  },
  {
  id: 15,
  cat: 'famille',
  question: 'Faut-il forcer les enfants à faire du sport ? Qu\'en pensez-vous ? Pourquoi ?',
  scriptUrl: 'famille/forcer_sport_enfants.html',
  date: '2026-05-13',
  stars: 1,
  status: "À faire"
  },
  {
  id: 16,
  cat: 'environnement',
  question: 'De nos jours, il est possible de vivre sans voiture. Qu\'en pensez-vous ?',
  scriptUrl: 'environnement/vivre_sans_voiture.html',
  date: '2026-05-15',
  stars: 0,
  status: "À faire"
}
];
