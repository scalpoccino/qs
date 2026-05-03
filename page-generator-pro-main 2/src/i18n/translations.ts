import type { Locale } from "./config";

export type MetricKey = "followers" | "likes" | "views" | "subscribers" | "plays" | "connections" | "reviews";

export type Translation = {
  // metric noun used in copy (translated)
  metric: Record<MetricKey, string>;
  hero: {
    badge: string;
    titleSuffix: string; // appended after "Buy X Platform"
    titlePrefix: string; // verb e.g. "Buy"
    description: (platform: string, metric: string) => string;
    ctaSignup: string;
    ctaSignin: string;
    fastDelivery: string;
    securePayments: string;
    support247: string;
  };
  why: {
    title: (platform: string, metric: string) => string;
    items: { title: string; desc: (platform: string, metric: string, startPrice: string) => string }[];
  };
  steps: {
    title: (platform: string, metric: string) => string;
    items: { n: string; title: string; desc: (platform: string, metric: string) => string }[];
    cta: string;
  };
  pricing: {
    title: (platform: string, metric: string) => string;
    subtitle: string;
    starter: string;
    popular: string;
    pro: string;
    mostPopular: string;
    startingAt: string;
    order: string;
    seeAll: string;
  };
  features: {
    title: string;
    items: (metric: string) => string[];
  };
  faq: {
    title: (platform: string, metric: string) => string;
    items: (platform: string, metric: string) => { q: string; a: string }[];
  };
  cta: {
    title: (platform: string) => string;
    subtitle: string;
    button: string;
  };
  header: {
    signin: string;
    signup: string;
  };
  meta: {
    title: (platform: string, metric: string) => string;
    description: (platform: string, metric: string) => string;
  };
};

const en: Translation = {
  metric: { followers: "followers", likes: "likes", views: "views", subscribers: "subscribers", plays: "plays", connections: "connections", reviews: "reviews" },
  hero: {
    badge: "Service active 24/7",
    titlePrefix: "Buy",
    titleSuffix: "to boost your credibility",
    description: (p, m) => `Boost your ${p} audience instantly. Backed by recognized expertise since 2011, we help your ${m} grow without any hassle. Whether you're an independent creator or an influencer, our growth solutions deliver fast, visible results. Place your order in 30 seconds and focus on your passion — we'll handle your visibility.`,
    ctaSignup: "Create my free account →",
    ctaSignin: "Sign in",
    fastDelivery: "Delivery starts within minutes",
    securePayments: "Secure payments",
    support247: "24/7 support",
  },
  why: {
    title: (p, m) => `Why choose BoostFollowers for your ${p} ${m}`,
    items: [
      { title: "World's #1 platform", desc: () => `Since 2011, we've been the global reference. Over 50,000 customers trust us daily to grow their social media. Our experience makes the difference.` },
      { title: "Ultra fast start", desc: (p, m) => `Once your order is confirmed, delivery of your ${p} ${m} starts within minutes. A steady, natural pace that strengthens your presence effortlessly.` },
      { title: "200+ growth services", desc: (p) => `${p} is just the beginning. Our catalog covers TikTok, YouTube, Facebook, Spotify and many other platforms.` },
      { title: "Transparent pricing", desc: (_p, _m, sp) => `Transparent prices, no hidden fees, no surprises. You see the exact price before checkout. Starting at ${sp}.` },
    ],
  },
  steps: {
    title: (p, m) => `How to buy ${p} ${m} in 3 steps`,
    items: [
      { n: "1", title: "Create your account", desc: () => "Sign up for free in less than 30 seconds. No credit card required, just an email and a password." },
      { n: "2", title: "Top up your balance", desc: () => "Make a bank transfer or USDC crypto payment. Your balance is credited as soon as the payment is received." },
      { n: "3", title: "Place your order", desc: (p, m) => `Pick the ${p} ${m} service that fits you, paste your profile link, enter the quantity and confirm.` },
    ],
    cta: "Get started now →",
  },
  pricing: {
    title: (p, m) => `How much does buying ${p} ${m} cost`,
    subtitle: "Our packages fit every budget. Discover sample prices and access the full catalog from your client area.",
    starter: "STARTER", popular: "POPULAR", pro: "PRO", mostPopular: "MOST POPULAR",
    startingAt: "starting at", order: "Order", seeAll: "See all pricing →",
  },
  features: {
    title: "An experience built for creators",
    items: (m) => [`High-quality ${m}, delivered at a natural pace`, "No password required, security guaranteed", "Refill guarantee in case of abnormal drop", "Clear dashboard to track your orders", "Human support available 7 days a week", "Volume discounts on large quantities"],
  },
  faq: {
    title: (p, m) => `Frequently asked questions about buying ${p} ${m}`,
    items: (p, m) => [
      { q: `Is it safe to buy ${m} on ${p}?`, a: `Yes. We use methods that comply with ${p}'s terms of service and we never ask for your password.` },
      { q: "How long does delivery take?", a: "Delivery starts within minutes after your order is confirmed, at a natural pace." },
      { q: "What payment methods do you accept?", a: "We accept SEPA bank transfers and USDC crypto payments. All payments are fully secured." },
      { q: `Are the ${m} permanent?`, a: `Our ${m} are high quality and stable. We offer a refill guarantee in case of any abnormal drop.` },
      { q: "Do you need my password?", a: `Never. We only need the public link of your ${p} profile or post.` },
      { q: "Can I order multiple times?", a: "Yes, you can top up your balance and place as many orders as you want." },
    ],
  },
  cta: { title: (p) => `Ready to boost your ${p}?`, subtitle: "Join thousands of creators who trust BoostFollowers.", button: "Order now →" },
  header: { signin: "Sign in", signup: "Create account" },
  meta: { title: (p, m) => `Buy ${p} ${m} — Real, Cheap & Fast Delivery | Boost ${p}`, description: (p, m) => `Buy real ${p} ${m} cheap and fast. Boost your ${p} account with high-quality ${m}, instant delivery, secure payment. #1 social growth platform since 2011.` },
};

const fr: Translation = {
  metric: { followers: "abonnés", likes: "j'aime", views: "vues", subscribers: "abonnés", plays: "écoutes", connections: "connexions", reviews: "avis" },
  hero: {
    badge: "Service actif 24h/24",
    titlePrefix: "Acheter",
    titleSuffix: "pour booster votre crédibilité",
    description: (p, m) => `Boostez votre audience ${p} instantanément. Forts d'une expertise reconnue depuis 2011, nous faisons grimper vos ${m} sans complication. Que vous soyez créateur indépendant ou influenceur, nos solutions garantissent des résultats rapides et visibles. Passez commande en 30 secondes et concentrez-vous sur votre passion : nous nous occupons de votre visibilité.`,
    ctaSignup: "Créer mon compte gratuit →", ctaSignin: "Se connecter",
    fastDelivery: "Livraison en quelques minutes", securePayments: "Paiements sécurisés", support247: "Support 24/7",
  },
  why: {
    title: (p, m) => `Pourquoi choisir BoostFollowers pour vos ${m} ${p}`,
    items: [
      { title: "Plateforme n°1 mondiale", desc: () => `Depuis 2011, nous sommes la référence mondiale. Plus de 50 000 clients nous font confiance au quotidien pour développer leurs réseaux.` },
      { title: "Démarrage ultra rapide", desc: (p, m) => `Une fois votre commande validée, la livraison de vos ${m} ${p} démarre en quelques minutes. Un rythme naturel qui renforce votre présence sans effort.` },
      { title: "Plus de 200 services", desc: (p) => `${p} n'est qu'un début. Notre catalogue couvre TikTok, YouTube, Facebook, Spotify et de nombreuses autres plateformes.` },
      { title: "Tarifs transparents", desc: (_p, _m, sp) => `Tarifs transparents, sans frais cachés ni surprises. Vous voyez le prix exact avant de valider. À partir de ${sp}.` },
    ],
  },
  steps: {
    title: (p, m) => `Comment acheter des ${m} ${p} en 3 étapes`,
    items: [
      { n: "1", title: "Créez votre compte", desc: () => "Inscrivez-vous gratuitement en moins de 30 secondes. Aucune carte bancaire demandée, juste un email et un mot de passe." },
      { n: "2", title: "Alimentez votre solde", desc: () => "Effectuez un virement bancaire ou un paiement crypto USDC. Votre solde est crédité dès réception du paiement." },
      { n: "3", title: "Passez commande", desc: (p, m) => `Choisissez le service ${p} ${m} qui vous convient, collez votre lien de profil, indiquez la quantité et validez.` },
    ],
    cta: "Commencer maintenant →",
  },
  pricing: {
    title: (p, m) => `Combien coûte l'achat de ${m} ${p}`,
    subtitle: "Nos forfaits s'adaptent à tous les budgets. Découvrez quelques tarifs et accédez au catalogue complet dans votre espace client.",
    starter: "STARTER", popular: "POPULAIRE", pro: "PRO", mostPopular: "LE PLUS POPULAIRE",
    startingAt: "à partir de", order: "Commander", seeAll: "Voir tous les tarifs →",
  },
  features: {
    title: "Une expérience pensée pour les créateurs",
    items: (m) => [`${m.charAt(0).toUpperCase() + m.slice(1)} de qualité, livrés à un rythme naturel`, "Aucun mot de passe demandé, sécurité garantie", "Garantie recharge en cas de baisse anormale", "Tableau de bord clair pour suivre vos commandes", "Support humain 7j/7", "Tarifs dégressifs sur les grandes quantités"],
  },
  faq: {
    title: (p, m) => `Questions fréquentes sur l'achat de ${m} ${p}`,
    items: (p, m) => [
      { q: `Est-ce sûr d'acheter des ${m} ${p} ?`, a: `Oui. Nous respectons les conditions d'utilisation de ${p} et ne demandons jamais votre mot de passe.` },
      { q: "Combien de temps prend la livraison ?", a: "La livraison démarre en quelques minutes après confirmation, à un rythme naturel." },
      { q: "Quels moyens de paiement acceptez-vous ?", a: "Nous acceptons les virements SEPA et les paiements crypto USDC. Tous sécurisés." },
      { q: `Les ${m} sont-ils permanents ?`, a: `Nos ${m} sont de qualité et stables. Nous proposons une garantie recharge en cas de baisse anormale.` },
      { q: "Avez-vous besoin de mon mot de passe ?", a: `Jamais. Nous avons uniquement besoin du lien public de votre profil ${p}.` },
      { q: "Puis-je commander plusieurs fois ?", a: "Oui, vous pouvez recharger votre solde et passer autant de commandes que vous voulez." },
    ],
  },
  cta: { title: (p) => `Prêt à booster votre ${p} ?`, subtitle: "Rejoignez des milliers de créateurs qui font confiance à BoostFollowers.", button: "Commander maintenant →" },
  header: { signin: "Se connecter", signup: "Créer un compte" },
  meta: { title: (p, m) => `Acheter des ${m} ${p} pas cher — Livraison rapide | Booster ${p}`, description: (p, m) => `Achetez de vrais ${m} ${p} pas cher et rapidement. Boostez votre compte ${p} avec des ${m} de qualité, livraison instantanée, paiement sécurisé. Plateforme n°1 depuis 2011.` },
};

const es: Translation = {
  metric: { followers: "seguidores", likes: "likes", views: "vistas", subscribers: "suscriptores", plays: "reproducciones", connections: "conexiones", reviews: "reseñas" },
  hero: {
    badge: "Servicio activo 24/7", titlePrefix: "Comprar", titleSuffix: "para impulsar tu credibilidad",
    description: (p, m) => `Impulsa tu audiencia de ${p} al instante. Con experiencia reconocida desde 2011, hacemos crecer tus ${m} sin complicaciones. Ya seas creador independiente o influencer, nuestras soluciones ofrecen resultados rápidos y visibles. Haz tu pedido en 30 segundos y concéntrate en tu pasión: nosotros nos encargamos de tu visibilidad.`,
    ctaSignup: "Crear mi cuenta gratis →", ctaSignin: "Iniciar sesión",
    fastDelivery: "Entrega en pocos minutos", securePayments: "Pagos seguros", support247: "Soporte 24/7",
  },
  why: {
    title: (p, m) => `Por qué elegir BoostFollowers para tus ${m} de ${p}`,
    items: [
      { title: "Plataforma n°1 mundial", desc: () => `Desde 2011 somos la referencia mundial. Más de 50.000 clientes confían en nosotros a diario.` },
      { title: "Inicio ultra rápido", desc: (p, m) => `Una vez confirmado tu pedido, la entrega de tus ${m} de ${p} empieza en pocos minutos.` },
      { title: "200+ servicios", desc: (p) => `${p} es solo el comienzo. Nuestro catálogo cubre TikTok, YouTube, Facebook, Spotify y muchas más.` },
      { title: "Precios transparentes", desc: (_p, _m, sp) => `Precios transparentes, sin tarifas ocultas. Ves el precio exacto antes de pagar. Desde ${sp}.` },
    ],
  },
  steps: {
    title: (p, m) => `Cómo comprar ${m} de ${p} en 3 pasos`,
    items: [
      { n: "1", title: "Crea tu cuenta", desc: () => "Regístrate gratis en menos de 30 segundos. Sin tarjeta, solo email y contraseña." },
      { n: "2", title: "Recarga tu saldo", desc: () => "Realiza una transferencia bancaria o un pago crypto USDC. Tu saldo se acredita al recibir el pago." },
      { n: "3", title: "Haz tu pedido", desc: (p, m) => `Elige el servicio de ${m} ${p} que te convenga, pega tu enlace, indica la cantidad y confirma.` },
    ],
    cta: "Empezar ahora →",
  },
  pricing: {
    title: (p, m) => `Cuánto cuesta comprar ${m} de ${p}`,
    subtitle: "Nuestros paquetes se adaptan a todos los presupuestos. Accede al catálogo completo desde tu área de cliente.",
    starter: "STARTER", popular: "POPULAR", pro: "PRO", mostPopular: "MÁS POPULAR",
    startingAt: "desde", order: "Pedir", seeAll: "Ver todos los precios →",
  },
  features: {
    title: "Una experiencia pensada para creadores",
    items: (m) => [`${m.charAt(0).toUpperCase() + m.slice(1)} de calidad, entregados a ritmo natural`, "Sin contraseña, seguridad garantizada", "Garantía de recarga ante caídas anormales", "Panel claro para seguir tus pedidos", "Soporte humano 7 días a la semana", "Descuentos por volumen"],
  },
  faq: {
    title: (p, m) => `Preguntas frecuentes sobre comprar ${m} de ${p}`,
    items: (p, m) => [
      { q: `¿Es seguro comprar ${m} en ${p}?`, a: `Sí. Cumplimos los términos de ${p} y nunca pedimos tu contraseña.` },
      { q: "¿Cuánto tarda la entrega?", a: "La entrega empieza en pocos minutos tras confirmar el pedido." },
      { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos transferencias SEPA y pagos crypto USDC. Todos seguros." },
      { q: `¿Los ${m} son permanentes?`, a: `Nuestros ${m} son de calidad y estables. Garantía de recarga ante caídas anormales.` },
      { q: "¿Necesitan mi contraseña?", a: `Nunca. Solo necesitamos el enlace público de tu perfil ${p}.` },
      { q: "¿Puedo pedir varias veces?", a: "Sí, puedes recargar tu saldo y hacer todos los pedidos que quieras." },
    ],
  },
  cta: { title: (p) => `¿Listo para impulsar tu ${p}?`, subtitle: "Únete a miles de creadores que confían en BoostFollowers.", button: "Pedir ahora →" },
  header: { signin: "Iniciar sesión", signup: "Crear cuenta" },
  meta: { title: (p, m) => `Comprar ${m} de ${p} baratos — Entrega rápida | Impulsar ${p}`, description: (p, m) => `Compra ${m} reales de ${p} baratos y rápidos. Impulsa tu cuenta de ${p} con ${m} de calidad, entrega instantánea, pago seguro. Plataforma n°1 desde 2011.` },
};

const de: Translation = {
  metric: { followers: "Follower", likes: "Likes", views: "Aufrufe", subscribers: "Abonnenten", plays: "Wiedergaben", connections: "Kontakte", reviews: "Bewertungen" },
  hero: {
    badge: "Service rund um die Uhr aktiv", titlePrefix: "Kaufen", titleSuffix: "um Ihre Glaubwürdigkeit zu stärken",
    description: (p, m) => `Steigern Sie Ihr ${p}-Publikum sofort. Mit anerkannter Expertise seit 2011 lassen wir Ihre ${m} ohne Aufwand wachsen. Ob unabhängiger Creator oder Influencer – unsere Lösungen liefern schnelle, sichtbare Ergebnisse. Bestellen Sie in 30 Sekunden und konzentrieren Sie sich auf Ihre Leidenschaft.`,
    ctaSignup: "Kostenloses Konto erstellen →", ctaSignin: "Anmelden",
    fastDelivery: "Lieferung in wenigen Minuten", securePayments: "Sichere Zahlungen", support247: "24/7 Support",
  },
  why: {
    title: (p, m) => `Warum BoostFollowers für Ihre ${p}-${m}`,
    items: [
      { title: "Weltweite Nr. 1 Plattform", desc: () => `Seit 2011 die globale Referenz. Über 50.000 Kunden vertrauen uns täglich.` },
      { title: "Ultraschneller Start", desc: (p, m) => `Sobald Ihre Bestellung bestätigt ist, beginnt die Lieferung Ihrer ${p} ${m} in wenigen Minuten.` },
      { title: "200+ Wachstumsdienste", desc: (p) => `${p} ist nur der Anfang. Unser Katalog umfasst TikTok, YouTube, Facebook, Spotify und viele mehr.` },
      { title: "Transparente Preise", desc: (_p, _m, sp) => `Transparente Preise, keine versteckten Kosten. Sie sehen den genauen Preis vor dem Kauf. Ab ${sp}.` },
    ],
  },
  steps: {
    title: (p, m) => `So kaufen Sie ${p} ${m} in 3 Schritten`,
    items: [
      { n: "1", title: "Konto erstellen", desc: () => "Kostenlose Anmeldung in unter 30 Sekunden. Keine Kreditkarte erforderlich, nur E-Mail und Passwort." },
      { n: "2", title: "Guthaben aufladen", desc: () => "Banküberweisung oder USDC Krypto-Zahlung. Ihr Guthaben wird sofort gutgeschrieben." },
      { n: "3", title: "Bestellung aufgeben", desc: (p, m) => `Wählen Sie den ${p} ${m} Service, fügen Sie Ihren Profillink ein, geben Sie die Menge an und bestätigen Sie.` },
    ],
    cta: "Jetzt starten →",
  },
  pricing: {
    title: (p, m) => `Was kostet der Kauf von ${p} ${m}`,
    subtitle: "Unsere Pakete passen zu jedem Budget. Den vollständigen Katalog finden Sie in Ihrem Kundenbereich.",
    starter: "STARTER", popular: "BELIEBT", pro: "PRO", mostPopular: "AM BELIEBTESTEN",
    startingAt: "ab", order: "Bestellen", seeAll: "Alle Preise ansehen →",
  },
  features: {
    title: "Eine Erfahrung für Creator gemacht",
    items: (m) => [`Hochwertige ${m}, in natürlichem Tempo geliefert`, "Kein Passwort erforderlich, Sicherheit garantiert", "Nachfüllgarantie bei abnormalem Rückgang", "Klares Dashboard zur Bestellverfolgung", "Menschlicher Support 7 Tage die Woche", "Mengenrabatte"],
  },
  faq: {
    title: (p, m) => `Häufige Fragen zum Kauf von ${p} ${m}`,
    items: (p, m) => [
      { q: `Ist es sicher, ${m} auf ${p} zu kaufen?`, a: `Ja. Wir halten uns an die Nutzungsbedingungen von ${p} und fragen nie nach Ihrem Passwort.` },
      { q: "Wie lange dauert die Lieferung?", a: "Die Lieferung startet wenige Minuten nach der Bestätigung." },
      { q: "Welche Zahlungsmethoden akzeptieren Sie?", a: "SEPA-Überweisungen und USDC Krypto-Zahlungen. Alle gesichert." },
      { q: `Sind die ${m} dauerhaft?`, a: `Unsere ${m} sind hochwertig und stabil. Nachfüllgarantie inklusive.` },
      { q: "Brauchen Sie mein Passwort?", a: `Nie. Wir benötigen nur den öffentlichen Link Ihres ${p}-Profils.` },
      { q: "Kann ich mehrmals bestellen?", a: "Ja, laden Sie Ihr Guthaben auf und bestellen Sie so oft Sie möchten." },
    ],
  },
  cta: { title: (p) => `Bereit, Ihr ${p} zu boosten?`, subtitle: "Schließen Sie sich Tausenden Creatoren an, die BoostFollowers vertrauen.", button: "Jetzt bestellen →" },
  header: { signin: "Anmelden", signup: "Konto erstellen" },
  meta: { title: (p, m) => `${p} ${m} kaufen günstig — Schnelle Lieferung | ${p} boosten`, description: (p, m) => `Echte ${p} ${m} günstig und schnell kaufen. Boosten Sie Ihren ${p}-Account mit hochwertigen ${m}, sofortige Lieferung, sichere Zahlung. Nr. 1 Plattform seit 2011.` },
};

const pt: Translation = {
  metric: { followers: "seguidores", likes: "curtidas", views: "visualizações", subscribers: "inscritos", plays: "reproduções", connections: "conexões", reviews: "avaliações" },
  hero: {
    badge: "Serviço ativo 24/7", titlePrefix: "Comprar", titleSuffix: "para impulsionar a sua credibilidade",
    description: (p, m) => `Impulsione a sua audiência no ${p} instantaneamente. Com expertise reconhecida desde 2011, fazemos crescer os seus ${m} sem complicações. Seja criador independente ou influenciador, oferecemos resultados rápidos e visíveis. Faça o pedido em 30 segundos e concentre-se na sua paixão.`,
    ctaSignup: "Criar a minha conta grátis →", ctaSignin: "Entrar",
    fastDelivery: "Entrega em poucos minutos", securePayments: "Pagamentos seguros", support247: "Suporte 24/7",
  },
  why: {
    title: (p, m) => `Por que escolher a BoostFollowers para os seus ${m} no ${p}`,
    items: [
      { title: "Plataforma n°1 mundial", desc: () => `Desde 2011 somos a referência mundial. Mais de 50.000 clientes confiam em nós diariamente.` },
      { title: "Início ultra rápido", desc: (p, m) => `Após confirmação, a entrega dos seus ${m} ${p} começa em poucos minutos.` },
      { title: "200+ serviços", desc: (p) => `${p} é apenas o começo. O nosso catálogo cobre TikTok, YouTube, Facebook, Spotify e muitas outras.` },
      { title: "Preços transparentes", desc: (_p, _m, sp) => `Preços transparentes, sem taxas ocultas. Vê o preço exato antes de pagar. A partir de ${sp}.` },
    ],
  },
  steps: {
    title: (p, m) => `Como comprar ${m} no ${p} em 3 passos`,
    items: [
      { n: "1", title: "Crie a sua conta", desc: () => "Registo gratuito em menos de 30 segundos. Sem cartão, apenas email e senha." },
      { n: "2", title: "Carregue o saldo", desc: () => "Faça uma transferência bancária ou pagamento crypto USDC. O saldo é creditado de imediato." },
      { n: "3", title: "Faça o pedido", desc: (p, m) => `Escolha o serviço ${p} ${m} ideal, cole o link do perfil, indique a quantidade e confirme.` },
    ],
    cta: "Começar agora →",
  },
  pricing: {
    title: (p, m) => `Quanto custa comprar ${m} no ${p}`,
    subtitle: "Os nossos pacotes adaptam-se a todos os orçamentos. Acesso ao catálogo completo na área de cliente.",
    starter: "STARTER", popular: "POPULAR", pro: "PRO", mostPopular: "MAIS POPULAR",
    startingAt: "a partir de", order: "Encomendar", seeAll: "Ver todos os preços →",
  },
  features: {
    title: "Uma experiência feita para criadores",
    items: (m) => [`${m.charAt(0).toUpperCase() + m.slice(1)} de qualidade, entregues a ritmo natural`, "Sem palavra-passe, segurança garantida", "Garantia de recarga em caso de queda anormal", "Painel claro para seguir os pedidos", "Suporte humano 7 dias por semana", "Descontos por volume"],
  },
  faq: {
    title: (p, m) => `Perguntas frequentes sobre comprar ${m} no ${p}`,
    items: (p, m) => [
      { q: `É seguro comprar ${m} no ${p}?`, a: `Sim. Cumprimos os termos do ${p} e nunca pedimos a sua palavra-passe.` },
      { q: "Quanto tempo demora a entrega?", a: "A entrega começa em poucos minutos após a confirmação." },
      { q: "Que métodos de pagamento aceitam?", a: "Transferências SEPA e pagamentos crypto USDC. Todos seguros." },
      { q: `Os ${m} são permanentes?`, a: `Os nossos ${m} são de qualidade e estáveis. Garantia de recarga incluída.` },
      { q: "Precisam da minha palavra-passe?", a: `Nunca. Apenas precisamos do link público do seu perfil ${p}.` },
      { q: "Posso encomendar várias vezes?", a: "Sim, carregue o saldo e faça quantos pedidos quiser." },
    ],
  },
  cta: { title: (p) => `Pronto para impulsionar o seu ${p}?`, subtitle: "Junte-se a milhares de criadores que confiam na BoostFollowers.", button: "Encomendar agora →" },
  header: { signin: "Entrar", signup: "Criar conta" },
  meta: { title: (p, m) => `Comprar ${m} no ${p} barato — Entrega rápida | Impulsionar ${p}`, description: (p, m) => `Compre ${m} reais no ${p} barato e rápido. Impulsione a sua conta ${p} com ${m} de qualidade, entrega instantânea, pagamento seguro. Plataforma n°1 desde 2011.` },
};

const ar: Translation = {
  metric: { followers: "متابعين", likes: "إعجابات", views: "مشاهدات", subscribers: "مشتركين", plays: "تشغيلات", connections: "اتصالات", reviews: "مراجعات" },
  hero: {
    badge: "خدمة نشطة 24/7", titlePrefix: "شراء", titleSuffix: "لتعزيز مصداقيتك",
    description: (p, m) => `عزّز جمهورك على ${p} فوراً. بخبرة معترف بها منذ 2011، نساعد ${m} الخاصة بك على النمو بدون عناء. سواء كنت منشئ محتوى مستقل أو مؤثراً، حلولنا تقدم نتائج سريعة وواضحة. اطلب في 30 ثانية وركز على شغفك.`,
    ctaSignup: "إنشاء حسابي المجاني ←", ctaSignin: "تسجيل الدخول",
    fastDelivery: "التسليم خلال دقائق", securePayments: "مدفوعات آمنة", support247: "دعم 24/7",
  },
  why: {
    title: (p, m) => `لماذا تختار BoostFollowers لـ ${m} ${p} الخاصة بك`,
    items: [
      { title: "المنصة رقم 1 عالمياً", desc: () => `منذ 2011 نحن المرجع العالمي. أكثر من 50,000 عميل يثقون بنا يومياً.` },
      { title: "بداية سريعة جداً", desc: (p, m) => `بعد تأكيد طلبك، يبدأ تسليم ${m} ${p} الخاصة بك خلال دقائق.` },
      { title: "أكثر من 200 خدمة", desc: (p) => `${p} مجرد بداية. كتالوجنا يشمل TikTok وYouTube وFacebook وSpotify والمزيد.` },
      { title: "أسعار شفافة", desc: (_p, _m, sp) => `أسعار شفافة، بدون رسوم خفية. ترى السعر الدقيق قبل الدفع. ابتداءً من ${sp}.` },
    ],
  },
  steps: {
    title: (p, m) => `كيفية شراء ${m} ${p} في 3 خطوات`,
    items: [
      { n: "1", title: "أنشئ حسابك", desc: () => "سجل مجاناً في أقل من 30 ثانية. بدون بطاقة، فقط بريد إلكتروني وكلمة مرور." },
      { n: "2", title: "اشحن رصيدك", desc: () => "قم بتحويل بنكي أو دفع كريبتو USDC. يُضاف رصيدك فوراً." },
      { n: "3", title: "اطلب", desc: (p, m) => `اختر خدمة ${p} ${m} المناسبة، الصق رابط ملفك الشخصي، حدد الكمية وأكد.` },
    ],
    cta: "ابدأ الآن ←",
  },
  pricing: {
    title: (p, m) => `كم يكلف شراء ${m} ${p}`,
    subtitle: "باقاتنا تناسب جميع الميزانيات. الكتالوج الكامل متاح في منطقة العملاء.",
    starter: "ستارتر", popular: "شائع", pro: "برو", mostPopular: "الأكثر شيوعاً",
    startingAt: "ابتداءً من", order: "اطلب", seeAll: "عرض كل الأسعار ←",
  },
  features: {
    title: "تجربة مصممة للمبدعين",
    items: (m) => [`${m} عالية الجودة، تُسلَّم بإيقاع طبيعي`, "بدون كلمة مرور، أمان مضمون", "ضمان إعادة الشحن عند الانخفاض غير الطبيعي", "لوحة تحكم واضحة لتتبع طلباتك", "دعم بشري 7 أيام في الأسبوع", "خصومات على الكميات الكبيرة"],
  },
  faq: {
    title: (p, m) => `أسئلة شائعة حول شراء ${m} ${p}`,
    items: (p, m) => [
      { q: `هل من الآمن شراء ${m} على ${p}؟`, a: `نعم. نحترم شروط ${p} ولا نطلب كلمة مرورك أبداً.` },
      { q: "كم يستغرق التسليم؟", a: "يبدأ التسليم خلال دقائق بعد تأكيد الطلب." },
      { q: "ما طرق الدفع المقبولة؟", a: "نقبل التحويلات SEPA ومدفوعات USDC الكريبتو. كلها آمنة." },
      { q: `هل ${m} دائمة؟`, a: `${m} الخاصة بنا عالية الجودة ومستقرة، مع ضمان إعادة الشحن.` },
      { q: "هل تحتاج كلمة مروري؟", a: `أبداً. نحتاج فقط الرابط العام لملفك على ${p}.` },
      { q: "هل يمكنني الطلب عدة مرات؟", a: "نعم، اشحن رصيدك واطلب كما تشاء." },
    ],
  },
  cta: { title: (p) => `جاهز لتعزيز ${p} الخاص بك؟`, subtitle: "انضم إلى آلاف المبدعين الذين يثقون بـ BoostFollowers.", button: "اطلب الآن ←" },
  header: { signin: "تسجيل الدخول", signup: "إنشاء حساب" },
  meta: { title: (p, m) => `شراء ${m} ${p} رخيص — تسليم سريع | تعزيز ${p}`, description: (p, m) => `اشترِ ${m} ${p} حقيقية رخيصة وسريعة. عزّز حسابك على ${p} بـ ${m} عالية الجودة، تسليم فوري، دفع آمن. المنصة رقم 1 منذ 2011.` },
};

const zh: Translation = {
  metric: { followers: "粉丝", likes: "点赞", views: "观看", subscribers: "订阅者", plays: "播放", connections: "联系人", reviews: "评论" },
  hero: {
    badge: "服务全天候运行", titlePrefix: "购买", titleSuffix: "提升您的可信度",
    description: (p, m) => `立即提升您的${p}受众。自2011年以来凭借公认的专业知识，我们助您的${m}毫不费力地增长。无论您是独立创作者还是网红，我们的解决方案都能带来快速可见的效果。30秒下单，专注您的热情。`,
    ctaSignup: "创建我的免费账户 →", ctaSignin: "登录",
    fastDelivery: "几分钟内送达", securePayments: "安全支付", support247: "全天候支持",
  },
  why: {
    title: (p, m) => `为什么选择 BoostFollowers 购买${p}${m}`,
    items: [
      { title: "全球第一平台", desc: () => `自2011年以来，我们是全球的参考。超过50,000名客户每天信任我们。` },
      { title: "极速启动", desc: (p, m) => `订单确认后，您的${p}${m}将在几分钟内开始送达。` },
      { title: "200+增长服务", desc: (p) => `${p}只是开始。我们的目录涵盖 TikTok、YouTube、Facebook、Spotify 等众多平台。` },
      { title: "价格透明", desc: (_p, _m, sp) => `价格透明，无隐藏费用。您在结账前看到确切价格。起价 ${sp}。` },
    ],
  },
  steps: {
    title: (p, m) => `3步购买${p}${m}`,
    items: [
      { n: "1", title: "创建账户", desc: () => "30秒内免费注册。无需信用卡，只需邮箱和密码。" },
      { n: "2", title: "充值余额", desc: () => "通过银行转账或 USDC 加密货币付款。收到付款后立即到账。" },
      { n: "3", title: "下单", desc: (p, m) => `选择适合您的${p}${m}服务，粘贴个人资料链接，输入数量并确认。` },
    ],
    cta: "立即开始 →",
  },
  pricing: {
    title: (p, m) => `购买${p}${m}的费用`,
    subtitle: "我们的套餐适合各种预算。完整目录可在您的客户区域查看。",
    starter: "入门版", popular: "热门版", pro: "专业版", mostPopular: "最受欢迎",
    startingAt: "起价", order: "订购", seeAll: "查看所有价格 →",
  },
  features: {
    title: "为创作者设计的体验",
    items: (m) => [`高质量${m}，自然节奏交付`, "无需密码，安全保证", "异常下降的补充保证", "清晰的仪表板跟踪订单", "每周7天人工支持", "大批量折扣"],
  },
  faq: {
    title: (p, m) => `关于购买${p}${m}的常见问题`,
    items: (p, m) => [
      { q: `在${p}上购买${m}安全吗？`, a: `是的。我们遵守${p}的服务条款，从不索取您的密码。` },
      { q: "送达需要多长时间？", a: "订单确认后几分钟内开始送达。" },
      { q: "接受哪些付款方式？", a: "我们接受 SEPA 银行转账和 USDC 加密货币付款。" },
      { q: `${m}是永久的吗？`, a: `我们的${m}质量高且稳定，提供补充保证。` },
      { q: "需要我的密码吗？", a: `从不。我们只需要您的${p}个人资料的公开链接。` },
      { q: "我可以多次下单吗？", a: "是的，您可以充值余额，根据需要下任意多个订单。" },
    ],
  },
  cta: { title: (p) => `准备好提升您的${p}了吗？`, subtitle: "加入数千位信任 BoostFollowers 的创作者。", button: "立即订购 →" },
  header: { signin: "登录", signup: "创建账户" },
  meta: { title: (p, m) => `购买${p}${m}便宜 — 快速送达 | 提升${p}`, description: (p, m) => `便宜快速购买真实的${p}${m}。用高质量${m}提升您的${p}账户，即时送达，安全支付。自2011年以来的第一平台。` },
};

const ja: Translation = {
  metric: { followers: "フォロワー", likes: "いいね", views: "再生回数", subscribers: "登録者", plays: "再生", connections: "コネクション", reviews: "レビュー" },
  hero: {
    badge: "24時間365日稼働中", titlePrefix: "購入", titleSuffix: "信頼性を高める",
    description: (p, m) => `${p}のオーディエンスを瞬時にブースト。2011年以来の確かな専門知識で、${m}を手間なく成長させます。独立クリエイターでもインフルエンサーでも、迅速で目に見える結果を提供します。30秒で注文し、情熱に集中してください。`,
    ctaSignup: "無料アカウントを作成 →", ctaSignin: "ログイン",
    fastDelivery: "数分で配信開始", securePayments: "安全な支払い", support247: "24時間365日サポート",
  },
  why: {
    title: (p, m) => `${p}の${m}に BoostFollowers を選ぶ理由`,
    items: [
      { title: "世界No.1プラットフォーム", desc: () => `2011年以来の世界的リファレンス。50,000人以上の顧客が毎日信頼しています。` },
      { title: "超高速スタート", desc: (p, m) => `注文確認後、${p}の${m}の配信が数分で開始されます。` },
      { title: "200以上のサービス", desc: (p) => `${p}はほんの始まり。TikTok、YouTube、Facebook、Spotify など多数対応。` },
      { title: "透明な価格", desc: (_p, _m, sp) => `透明な価格、隠れた手数料なし。チェックアウト前に正確な価格を確認。${sp}から。` },
    ],
  },
  steps: {
    title: (p, m) => `${p}の${m}を3ステップで購入`,
    items: [
      { n: "1", title: "アカウント作成", desc: () => "30秒以内に無料で登録。クレジットカード不要、メールとパスワードだけ。" },
      { n: "2", title: "残高をチャージ", desc: () => "銀行振込または USDC 暗号通貨で支払い。受領後すぐに反映。" },
      { n: "3", title: "注文", desc: (p, m) => `${p}の${m}サービスを選び、プロフィールリンクを貼り、数量を入力して確定。` },
    ],
    cta: "今すぐ始める →",
  },
  pricing: {
    title: (p, m) => `${p}の${m}購入費用`,
    subtitle: "あらゆる予算に対応するプラン。完全カタログはクライアントエリアからアクセス。",
    starter: "スターター", popular: "人気", pro: "プロ", mostPopular: "最も人気",
    startingAt: "から", order: "注文", seeAll: "すべての価格を見る →",
  },
  features: {
    title: "クリエイターのための体験",
    items: (m) => [`高品質な${m}を自然なペースで配信`, "パスワード不要、安全保証", "異常な減少時の補充保証", "注文を追跡する明確なダッシュボード", "週7日対応の人によるサポート", "大量注文の割引"],
  },
  faq: {
    title: (p, m) => `${p}の${m}購入に関するよくある質問`,
    items: (p, m) => [
      { q: `${p}で${m}を購入するのは安全ですか？`, a: `はい。${p}の利用規約に準拠し、パスワードは決して尋ねません。` },
      { q: "配信にはどれくらいかかりますか？", a: "注文確認後、数分で配信開始されます。" },
      { q: "どの支払い方法に対応していますか？", a: "SEPA 銀行振込と USDC 暗号通貨に対応。すべて安全です。" },
      { q: `${m}は永続的ですか？`, a: `${m}は高品質で安定しており、異常減少時の補充保証付きです。` },
      { q: "パスワードは必要ですか？", a: `不要です。${p}プロフィールの公開リンクのみ必要です。` },
      { q: "複数回注文できますか？", a: "はい、残高をチャージして必要な数だけ注文できます。" },
    ],
  },
  cta: { title: (p) => `${p}をブーストする準備はできましたか？`, subtitle: "BoostFollowers を信頼する数千人のクリエイターに参加。", button: "今すぐ注文 →" },
  header: { signin: "ログイン", signup: "アカウント作成" },
  meta: { title: (p, m) => `${p}の${m}を購入 安い — 迅速配信 | ${p}ブースト`, description: (p, m) => `本物の${p}の${m}を安く迅速に購入。高品質な${m}で${p}アカウントをブースト、即時配信、安全な支払い。2011年以来のNo.1プラットフォーム。` },
};

export const translations: Record<Locale, Translation> = { en, fr, es, de, pt, ar, zh, ja };

export function t(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
