const csv = require('csv-parser');
const fs = require('fs');

// const results = [];

const Hplanet = [];

function isHabitable(planet)
{
    return planet['koi_disposition'] === 'CONFIRMED' ;
    // && planet['koi_insol']  > 0.36 && planet['koi_inssol'] < 1.11 && planet ['koi_prad'] < 1.6;
}
fs.createReadStream('kepler_data.csv')
.pipe( csv({
    comment: '#',
    columns: true
    } ))
  .on('data', (data) => {
    isHabitable(data);
    if(isHabitable(data))
    {
        Hplanet.push(data);
    }
    
    
  })
  .on('error ', (err) => {
    console.log(err);
  })
  .on('end' , () => {
    // console.log(results);
    console.log('Done');
    console.log(`${Hplanet.length} habitable Planets found !!!`);
  });
