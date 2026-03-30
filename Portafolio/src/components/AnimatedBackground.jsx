/**
 * Fondo estático simple — sin blobs ni blur para máximo rendimiento.
 */
const AnimatedBackground = () => (
  <div
    className="fixed inset-0 -z-20"
    style={{
      background: "linear-gradient(135deg, #09090b 0%, #0d0714 50%, #09090b 100%)",
    }}
    aria-hidden="true"
  />
);

export default AnimatedBackground;
