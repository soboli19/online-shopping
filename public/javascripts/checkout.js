// Stripe.setPublishableKey('pk_test_ZBRr8NHqJmYA48M2FGGmpL3N');

var $form = $('#checkout-form');

$form.submit(function(event) {
    $form.find('button').prop('disabled', true);
    
});