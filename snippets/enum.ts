enum Role {
  Admin,
  User,
  Guest,
}
function getPermission(role: Role) {
  if (role === Role.Admin) return "Full Access";
  if (role === Role.User) return "Limited Access";
  return "Guest Access";
}
