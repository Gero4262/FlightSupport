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
  investment: `
    <div class="package-grid">
      <article class="package-card"><span>SERVICIOS PROFESIONALES</span><h3>Diseño y desarrollo</h3><div class="price"><strong>Q 20,500.00</strong><small>tarifa integral preferencial</small></div><ul><li>Descubrimiento, arquitectura y UI/UX</li><li>Identidad visual y firma de correo</li><li>Frontend, animaciones y panel administrativo</li><li>Seguridad, i18n, SEO, QA y DevOps</li></ul></article>
      <article class="package-card"><span>PRIMER AÑO</span><h3>Infraestructura</h3><div class="price"><strong>Q 2,500.00</strong><small>hosting, dominio y gestión técnica</small></div><ul><li>Hosting web por 12 meses: Q1,500</li><li>Recuperación/transferencia: Q750</li><li>Renovación estimada de dominio: Q250</li><li>SSL y pruebas de producción</li></ul></article>
      <article class="package-card recommended"><b class="package-badge">TOTAL INICIAL</b><span>INVERSIÓN RECOMENDADA</span><h3>Flight Support</h3><div class="price"><strong>Q 23,000.00</strong><small>servicios + infraestructura del primer año</small></div><ul><li>Alcance funcional completo</li><li>Hasta 5 sesiones de seguimiento</li><li>Capacitación y despliegue</li><li>30 días de garantía de errores</li></ul></article>
    </div>
    <div class="detail-grid quote-options">
      <article><span>OPCIONAL</span><h3>Migración de correo</h3><p>Q1,800.00 · Hasta 3 buzones y 25 GB agregados.</p></article>
      <article><span>FASE POSTERIOR</span><h3>Idioma inglés</h3><p>Q2,500.00 – Q4,000.00 · Sin traducción profesional.</p></article>
      <article><span>CONTINUIDAD</span><h3>Plan mensual</h3><p>Q500.00 / mes · Monitoreo, backups y soporte menor.</p></article>
      <article><span>ADICIONAL</span><h3>Sesión extra</h3><p>Q250.00 por sesión fuera de las cinco incluidas.</p></article>
    </div>`,
  deliverables: `
    <div class="detail-grid">
      <article><span>01 · SITIO PÚBLICO</span><h3>Experiencia responsive</h3><p>Inicio, Nosotros, Servicios, Aeronaves, Ubicaciones, Recursos, Operaciones y Contacto.</p></article>
      <article><span>02 · ADMINISTRACIÓN</span><h3>Operaciones e historias</h3><p>Panel con autenticación, CRUD, borradores, destacados, portada, galería y visibilidad.</p></article>
      <article><span>03 · IDENTIDAD</span><h3>Marca y comunicación</h3><p>Logotipo y variantes, favicon, paleta, tipografías y firma corporativa para correo.</p></article>
      <article><span>04 · ENTREGA</span><h3>Implementación completa</h3><p>Código, base de datos, despliegue, SEO y seguridad básica, capacitación y guía de uso.</p></article>
    </div>`,
  timeline: `
    <div class="timeline">
      <article><span>SEMANA 01</span><h3>Descubrimiento</h3><p>Arquitectura, avance UI/UX, hosting, SSL e inventario.</p></article>
      <article><span>SEMANA 02</span><h3>Demo navegable</h3><p>UI/UX, logo y firma aprobados; gestión de accesos.</p></article>
      <article><span>SEMANA 03</span><h3>Secciones base</h3><p>Inicio, Nosotros y Servicios; seguimiento de dominio.</p></article>
      <article><span>SEMANA 04</span><h3>Sitio beta</h3><p>Resto de secciones y Operaciones/Historias.</p></article>
      <article><span>SEMANA 05</span><h3>Beta funcional</h3><p>Panel administrativo, CRUD, contenido y galería.</p></article>
      <article><span>SEMANA 06</span><h3>Prelanzamiento</h3><p>i18n, seguridad, SEO y ajustes técnicos.</p></article>
      <article><span>SEMANA 07</span><h3>Entrega</h3><p>QA, correcciones, capacitación y publicación.</p></article>
    </div>`,
  payment: `
    <div class="timeline payment-timeline">
      <article><span>40% · INICIO</span><h3>Q 8,200.00</h3><p>Alta del proyecto e inicio formal del trabajo.</p></article>
      <article><span>30% · DISEÑO</span><h3>Q 6,150.00</h3><p>Aprobación de UI/UX y demo navegable.</p></article>
      <article><span>20% · BETA</span><h3>Q 4,100.00</h3><p>Beta funcional revisada y aprobada.</p></article>
      <article><span>10% · ENTREGA</span><h3>Q 2,050.00</h3><p>Entrega y publicación del proyecto.</p></article>
    </div>
    <p class="prototype-note">El esquema aplica a los Q20,500.00 de servicios profesionales. La infraestructura se paga antes de contratar los servicios correspondientes.</p>`,
  care: `
    <div class="care-grid">
      <article><span class="section-number">Q500.00 / MES</span><h3>Plan de continuidad</h3><ul><li>Monitoreo básico de disponibilidad</li><li>Backups programados y verificación periódica</li><li>Revisión mensual de actualizaciones y seguridad</li><li>Verificación de formularios, panel y publicación</li></ul></article>
      <article><span class="section-number">SOPORTE INCLUIDO</span><h3>Hasta una hora mensual</h3><p>Soporte técnico y cambios menores, acumulables únicamente dentro del mes vigente.</p><p><strong>No incluye</strong> rediseños, nuevas secciones, desarrollo de módulos ni carga masiva de contenido.</p></article>
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
renderProposal('investment');

document.querySelectorAll('.resource-grid button').forEach((button) => button.addEventListener('click', () => showToast('Módulo demostrativo: se conectará a recursos oficiales aprobados.')));
window.addEventListener('popstate', () => navigate(location.hash.slice(1) || 'inicio', false));
window.addEventListener('DOMContentLoaded', () => navigate(location.hash.slice(1) || 'inicio', false));
