$(document).ready(function() {
    $.get('https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0xed15fcf9b940b47a7aa9efad73573c54286cbd48&apikey=', function(data) {
            var circu = (data.result / 1000000000000000000).toLocaleString();
            $('#circu').text(circu);
        });
$.ajax({
          url: 'https://deep-index.moralis.io/api/v2/erc20/0xeD15fcf9b940b47A7aA9EfAd73573c54286cbD48/price?chain=bsc&exchange=pancakeswap-v2',
          headers: {
            'accept': 'application/json',
            'X-API-Key': ''
          },
          method: 'GET',
          dataType: 'json',
          success: function(data) {
            var price = (data.usdPrice).toFixed(13);
            $('#price').text(price + '$');
          }
        });
        $.get('https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xed15fcf9b940b47a7aa9efad73573c54286cbd48&apikey=', function(data) {
          var appro = (data.result / 1000000000000000000).toLocaleString();
          $('#appro').text(appro);
      });
});