using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyApp.Dtos
{
    /// <summary>
    /// The user DTO is a data transfer object used send selected user data to and from the users api end points
    /// </summary>
    public class UserDto
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Type { get; set; }
    }
}
