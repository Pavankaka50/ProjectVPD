using Microsoft.EntityFrameworkCore;
using Project_Vpd.Models;
using Project_Vpd.RepositoryPattern;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<HomeContext>( options=>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IVegetableRepository, VegetableRepository>();

/*builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("http://localhost:3000/").AllowAnyMethod().AllowAnyHeader();
}));*/
builder.Services.AddCors( options=>
{
    options.AddDefaultPolicy(
        builder=>
        {
            builder.WithOrigins("http://localhost:3000", "http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseCors("corspolicy");
app.UseCors(builder=>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
