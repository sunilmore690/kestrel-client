const tenSeconds = 10000;
export const environments = [
  {
    name: "LIVE",
    apps: [
      {
        url: "https://stakenote.xyz/api/notes",
        name: "Stakenote",
        interval: tenSeconds,
        logs: "ssh://root@51.15.68.143 docker logs --tail 400 stakenote"
      },
      {
        url: "https://facebook.com",
        name: "API_ONE",
        interval: tenSeconds
      },
      {
        url: "http://localhost:8081/actuator/health",
        name: "API_TWO",
        interval: tenSeconds
      }
    ]
  },
  {
    name: "UAT1",
    apps: [
      {
        url: "http://localhost:8081/actuator/health",
        name: "Auth",
        interval: tenSeconds
      },
      {
        url: "http://localhost:8081/actuator/health",
        name: "API_ONE",
        interval: tenSeconds
      },
      {
        url: "http://localhost:8081/actuator/health",
        name: "API_TWO",
        interval: tenSeconds
      }
    ]
  },
  {
    name: "SIT1",
    apps: [
      {
        url: "http://localhost:8081/actuator/health",
        name: "Auth",
        interval: tenSeconds
      },
      {
        url: "http://localhost:8081/actuator/health",
        name: "API_ONE",
        interval: tenSeconds
      },
      {
        url: "http://localhost:8081/actuator/health",
        name: "API_TWO",
        interval: tenSeconds
      }
    ]
  },
  {
    name: "UAT2",
    apps: [
      {
        url: "http://localhost:8081/actuator/health",
        name: "Auth",
        interval: tenSeconds
      },
      {
        url: "http://localhost:8081/actuator/health",
        name: "API_ONE",
        interval: tenSeconds
      },
      {
        url: "http://localhost:8081/actuator/health",
        name: "API_TWO",
        interval: tenSeconds
      }
    ]
  }
];
