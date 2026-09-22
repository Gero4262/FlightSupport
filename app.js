const services = [
  { icon: '⌁', title: 'Flight Planning', text: 'Planificación de rutas, coordinación y documentación previa al vuelo.' },
  { icon: '◎', title: 'Ground Handling', text: 'Coordinación integral en tierra, pasajeros, tripulación y aeronave.' },
  { icon: '◈', title: 'Combustible', text: 'Gestión de suministro, confirmación y seguimiento con proveedores.' },
  { icon: '◌', title: 'Meteorología', text: 'Información meteorológica para apoyar decisiones operativas.' },
  { icon: '▧', title: 'Permisos', text: 'Acompañamiento en permisos de sobrevuelo, aterrizaje y operación.' },
  { icon: '◇', title: 'FBO', text: 'Servicios de terminal, atención VIP y coordinación de facilidades.' },
  { icon: '↝', title: 'Transporte', text: 'Traslados seguros y puntuales para pasajeros y tripulación.' },
  { icon: '⬡', title: 'Seguridad', text: 'Protocolos y coordinación de seguridad ajustados a cada misión.' },
];

const aircraft = {
  executive: { kicker: 'AVIACIÓN EJECUTIVA', title: 'Jets ejecutivos', text: 'Atención discreta, ágil y personalizada para pasajeros, tripulación y aeronave.', specs: [['Enfoque','Rapidez y privacidad'],['Servicios','VIP · FBO · Transporte']], glyph: '✈' },
  commercial: { kicker: 'AVIACIÓN COMERCIAL', title: 'Aeronaves comerciales', text: 'Coordinación escalable para itinerarios, turnarounds y requerimientos de estación.', specs: [['Enfoque','Puntualidad operativa'],['Servicios','Handling · Permisos']], glyph: '✈' },
  cargo: { kicker: 'OPERACIÓN DE CARGA', title: 'Carga especializada', text: 'Soporte para operaciones sensibles al tiempo, documentación y coordinación terrestre.', specs: [['Enfoque','Continuidad logística'],['Servicios','Rampa · Transporte']], glyph: '✈' },
};

const proposals = {
  packages: `
    <div class="package-grid">
      <article class="package-card"><span>BASE DIGITAL</span><h3>Esencial</h3><div class="price"><strong>Q 8,500 – Q 12,500</strong><small>implementación · Q 850 – Q 1,250 / mes</small></div><ul><li>Sitio informativo responsive</li><li>Secciones esenciales en español</li><li>Formulario y analítica básica</li><li>Mantenimiento preventivo</li></ul><button data-package="Esencial">Explorar paquete</button></article>
      <article class="package-card recommended"><b class="package-badge">RECOMENDADO</b><span>PRESENCIA OPERATIVA</span><h3>Operacional</h3><div class="price"><strong>Q 14,500 – Q 22,000</strong><small>implementación · Q 1,450 – Q 2,400 / mes</small></div><ul><li>Todo lo incluido en Esencial</li><li>ES / EN y módulo Operaciones</li><li>Editor de historias y recursos</li><li>Monitoreo, respaldo y reporte</li></ul><button data-package="Operacional">Explorar paquete</button></article>
      <article class="package-card"><span>ESCALA Y CONTENIDO</span><h3>Premium Ops</h3><div class="price"><strong>Q 24,000 – Q 38,000</strong><small>implementación · Q 2,800 – Q 4,500 / mes</small></div><ul><li>Todo lo incluido en Operacional</li><li>SEO y contenido de lanzamiento</li><li>Integraciones y automatizaciones</li><li>Soporte prioritario</li></ul><button data-package="Premium Ops">Explorar paquete</button></article>
    </div>`,
  deliverables: `
    <div class="detail-grid">
      <article><span>01 · ESTRATEGIA</span><h3>Arquitectura y contenido</h3><p>Mapa del sitio, jerarquía de mensajes, llamadas a la acción y plan bilingüe.</p></article>
      <article><span>02 · DISEÑO</span><h3>Experiencia visual</h3><p>Interfaz adaptable, animaciones, identidad visual inicial y componentes reutilizables.</p></article>
      <article><span>03 · DESARROLLO</span><h3>Sitio administrable</h3><p>Implementación, sección Operaciones, formularios, rendimiento y analítica.</p></article>
      <article><span>04 · LANZAMIENTO</span><h3>Entrega y capacitación</h3><p>Pruebas, publicación aprobada, manual breve y sesión para administrar contenido.</p></article>
    </div>`,
  timeline: `
    <div class="timeline">
      <article><span>SEMANA 01</span><h3>Descubrimiento</h3><p>Alcance, contenidos, accesos, dominio, correo y referencias.</p></article>
      <article><span>SEMANA 02</span><h3>Diseño</h3><p>Dirección visual, textos clave y prototipo navegable.</p></article>
      <article><span>SEMANAS 03–04</span><h3>Implementación</h3><p>Desarrollo, carga inicial, bilingüe y panel de contenido.</p></article>
      <article><span>SEMANA 05</span><h3>Validación</h3><p>Pruebas, capacitación y lanzamiento tras aprobación expresa.</p></article>
    </div>`,
  care: `
    <div class="care-grid">
      <article><span class="section-number">OPERACIÓN CONTINUA</span><h3>Mantenimiento y monitoreo</h3><ul><li>Actualizaciones técnicas y revisión preventiva</li><li>Monitoreo de disponibilidad y formularios</li><li>Optimización menor de rendimiento</li><li>Reporte mensual de estado</li></ul></article>
      <article><span class="section-number">PROTECCIÓN</span><h3>Copias de seguridad</h3><p><strong>Diarias</strong> para base de datos y contenido dinámico, más respaldo <strong>semanal</strong> completo con retención acordada.</p><p>Restauración asistida según el plan. Hosting, dominio, licencias, correo y migración se confirman después de la evaluación técnica.</p></article>
    </div>`,
};

const views = [...document.querySelectorAll('.view')];
const routeLinks = [...document.querySelectorAll('[data-route]')];
const desktopLinks = [...document.querySelectorAll('.desktop-nav [data-route]')];
const mobileDrawer = document.getElementById('mobileDrawer');
const menuButton = document.getElementById('menuButton');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2800);
}

function closeMenu() {
  mobileDrawer.classList.remove('open');
  mobileDrawer.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
}

function navigate(route, pushHash = true) {
  const target = views.find((view) => view.dataset.view === route) || views[0];
  views.forEach((view) => view.classList.toggle('active', view === target));
  desktopLinks.forEach((link) => link.classList.toggle('active', link.dataset.route === target.dataset.view));
  if (pushHash && location.hash !== `#${target.dataset.view}`) history.pushState(null, '', `#${target.dataset.view}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
  document.getElementById('app').focus({ preventScroll: true });
}

routeLinks.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  navigate(link.dataset.route);
}));

menuButton.addEventListener('click', () => {
  const open = mobileDrawer.classList.toggle('open');
  mobileDrawer.setAttribute('aria-hidden', String(!open));
  menuButton.setAttribute('aria-expanded', String(open));
});

document.getElementById('languageToggle').addEventListener('click', () => {
  showToast('La estructura EN está preparada para la fase de traducción y validación.');
});

const serviceGrid = document.getElementById('serviceGrid');
const serviceDetail = document.getElementById('serviceDetail');
serviceGrid.innerHTML = services.map((service, index) => `<button class="service-card" data-service="${index}"><small>${String(index + 1).padStart(2,'0')}</small><span class="icon">${service.icon}</span><h3>${service.title}</h3></button>`).join('');
serviceGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-service]');
  if (!button) return;
  const service = services[Number(button.dataset.service)];
  serviceGrid.querySelectorAll('.service-card').forEach((item) => item.classList.toggle('active', item === button));
  serviceDetail.innerHTML = `<div><div><span class="section-number">SERVICIO SELECCIONADO</span><h3>${service.title}</h3></div><p>${service.text} El alcance detallado y los proveedores involucrados se validarán antes de la propuesta final.</p><button aria-label="Cerrar detalle">×</button></div>`;
  serviceDetail.classList.add('open');
});
serviceDetail.addEventListener('click', (event) => {
  if (event.target.closest('button')) { serviceDetail.classList.remove('open'); serviceGrid.querySelectorAll('.service-card').forEach((item) => item.classList.remove('active')); }
});

const aircraftStage = document.getElementById('aircraftStage');
function renderAircraft(key) {
  const item = aircraft[key];
  aircraftStage.innerHTML = `<div class="aircraft-art"><span class="aircraft-silhouette">${item.glyph}</span></div><div class="aircraft-info"><span>${item.kicker}</span><h3>${item.title}</h3><p>${item.text}</p><div class="aircraft-specs">${item.specs.map(([label,value]) => `<div><small>${label}</small><strong>${value}</strong></div>`).join('')}</div></div>`;
}
document.querySelector('.aircraft-tabs').addEventListener('click', (event) => {
  const button = event.target.closest('[data-aircraft]');
  if (!button) return;
  document.querySelectorAll('[data-aircraft]').forEach((item) => item.classList.toggle('active', item === button));
  renderAircraft(button.dataset.aircraft);
});
renderAircraft('executive');

const proposalPanel = document.getElementById('proposalPanel');
function renderProposal(key) {
  proposalPanel.innerHTML = proposals[key];
}
document.querySelector('.proposal-switcher').addEventListener('click', (event) => {
  const button = event.target.closest('[data-proposal]');
  if (!button) return;
  document.querySelectorAll('[data-proposal]').forEach((item) => item.classList.toggle('active', item === button));
  renderProposal(button.dataset.proposal);
});
proposalPanel.addEventListener('click', (event) => {
  const button = event.target.closest('[data-package]');
  if (button) showToast(`${button.dataset.package}: alcance disponible para comparar en la reunión de validación.`);
});
renderProposal('packages');

document.querySelectorAll('.resource-grid button').forEach((button) => button.addEventListener('click', () => showToast('Módulo demostrativo: se conectará a recursos oficiales aprobados.')));
window.addEventListener('popstate', () => navigate(location.hash.slice(1) || 'inicio', false));
window.addEventListener('DOMContentLoaded', () => navigate(location.hash.slice(1) || 'inicio', false));
