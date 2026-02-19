# Minimal Web API

This is a minimal Web API project built with C#. It serves as a simple example of how to create a RESTful API for handling weather forecasts.

## Project Structure

```
MinimalWebApi
├── Controllers
│   └── WeatherForecastController.cs
├── Program.cs
├── MinimalWebApi.csproj
└── README.md
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd MinimalWebApi
   ```

2. **Restore dependencies**:
   ```
   dotnet restore
   ```

3. **Run the application**:
   ```
   dotnet run
   ```

## Usage

Once the application is running, you can access the weather forecasts by sending a GET request to the following endpoint:

```
GET /weatherforecast
```

This will return a list of weather forecasts in JSON format.

## Dependencies

This project targets .NET 6.0 and uses the following dependencies:
- Microsoft.AspNetCore.App

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.