const http = require("http");

const PORT = 3000;

const server = http.createServer();

const lists = [
  {
    id: 0,
    name: "Nikolas Tesla ",
  },

  {
    id: 1,  
    name: "Sr Isaac Newton ",
  },
  {
    id: 2,
    name: "Albert Enstine",
  },
]; 

server.on("request", (req, res) => {
  const items = req.url.split("/");

   if(req.method === 'POST' && items[1] === "list")
   {
     req.on('data' , (data) => {
      const singlelist = data.toString();

      console.log('Request:' , singlelist);
      lists.push(JSON.parse(singlelist)) ;

     })
   }
 else if (req.method === 'GET' && items[1] === "list") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    
    if(items.length === 3)
    {
        const index = Number(items[2]);
        res.end(JSON.stringify(lists[index]));
    }
    else 
    {
        res.end(JSON.stringify(lists));
    }
    
  } else if (req.method === 'GET' && items[1] === "/message") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> HEllow world</li>");
    res.write("<li> my name is Haileliue</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
