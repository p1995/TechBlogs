const ADMIN = 0;
const USER = 1;
const GUEST = 2;

function getPermissions(role: number) {
  if (role === ADMIN) return "Full Access";
  if (role === USER) return "Limited Access";
  return "Guest Access";
}
