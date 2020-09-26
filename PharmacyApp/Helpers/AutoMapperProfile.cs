using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using PharmacyApp.Models;
using PharmacyApp.Dtos;

namespace PharmacyApp.Helpers
{
    /// <summary>
    /// The automapper profile contains the mapping configuration used by the application, it enables mapping of user entities to dtos and dtos to entities
    /// </summary>
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}
