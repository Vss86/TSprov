// ex-8.ts
enum UserRole {
    Admin = "Admin",
    Member = "Member",
    Guest = "Guest",
  }
  
  interface User {
    name: string;
    role: UserRole;
  }
  
  function assignBadgeColor(user: User): string {
    switch (user.role) {
      case UserRole.Admin:
        return "Red";
      case UserRole.Member:
        return "Blue";
      case UserRole.Guest:
        return "Green";
      default:
        return "Unknown";
    }
  }
  
  // Test the function
  const user1: User = { name: 'Alice', role: UserRole.Admin };
  console.log(assignBadgeColor(user1)); // Should print "Red".
  