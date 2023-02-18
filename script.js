function getMenu() {
    const url = 'https://free-food-menus-api-production.up.railway.app/burgers';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const menuList = document.getElementById('menu-list');
        data.forEach(item => {
          const menuItem = document.createElement('li');
          menuItem.innerHTML = `<h2>${item.name}</h2><p>${item.dsc}</p><p>Price: ${item.price}</p><p>Price: ${item.rate}</p><p>Price: ${item.country}</p>`;
          menuList.appendChild(menuItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function takeOrder() {
    const burgers = ['Cheeseburger', 'Veggie Burger', 'Bacon Burger', 'Mushroom Swiss Burger', 'Double Burger'];
    const order = {};
  
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
          order[`burger${i+1}`] = randomBurger;
        }
        resolve(order);
      }, 2500);
    });
  
    promise.then(order => {
      const statusMessage = document.getElementById('status-message');
      statusMessage.innerHTML = `Your order of ${order.burger1}, ${order.burger2}, and ${order.burger3} has been placed.`;
      const orderStatus = document.getElementById('order-status');
      orderStatus.style.display = 'block';
    });
  }

  

  
  function payOrder() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderStatus = true;
        const paid = true;
        const paymentStatus = {
          order_status: orderStatus,
          paid: paid
        };
        resolve(paymentStatus);
      }, 1000);
    });

promise.then(paymentStatus => {
      const paymentStatusMessage = document.getElementById('payment-status-message');
      paymentStatusMessage.innerHTML = `Your order has been paid for. Order status: ${paymentStatus.order_status}. Payment status: ${paymentStatus.paid}.`;
      const paymentStatusEl = document.getElementById('payment-status');
      paymentStatusEl.style.display = 'block';
    });
  }


  function thankyouFnc() {
    alert("Thank you for your payment. Your order will be ready soon.");
  }
  
  function placeOrder() {
    getMenu();
    takeOrder().then(function(orderObj) {
      console.log("Order:", orderObj);
        payOrder().then(function(paymentObj) {
          console.log("Payment:", paymentObj);
          if (paymentObj.paid) {
            thankyouFnc();
          }
        });
      });
    };

  
  

  
  
  