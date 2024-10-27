$(document).on("click", "#cancel_order_btn", function() {
    if (confirm("Cancel this order?")) {
        alert("Order canceled.");
    }
});