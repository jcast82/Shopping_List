$(document).ready(function() {
    let total = 0;
    
    
    $('#add-item').click(function() {
        let newRow = `
            <tr>
                <td><input type="text" class="form-control item-name" placeholder="Item name"></td>
                <td><input type="number" class="form-control item-price" value="0"></td>
                <td><input type="number" class="form-control item-quantity" value="1"></td>
                <td class="item-subtotal">0</td>
                <td><button class="btn btn-danger delete-item">Delete</button></td>
            </tr>
        `;
        $('#cart tbody').append(newRow);
        calculateTotal();
    });

    
    function calculateSubtotal(row) {
        let price = Number($(row).find('.item-price').val());
        let quantity = Number($(row).find('.item-quantity').val());
        let subtotal = price * quantity;
        $(row).find('.item-subtotal').text(subtotal);
        return subtotal;
    }

    
    function calculateTotal() {
        total = 0;
        $('#cart tbody tr').each(function() {
            let subtotal = calculateSubtotal($(this));
            total += subtotal;
        });
        $('#total-price').text(total);
    }

    
    $(document).on('input', '.item-price, .item-quantity', function() {
        calculateTotal();
    });

    
    $(document).on('click', '.delete-item', function() {
        $(this).parents('tr').remove();
        calculateTotal();
    });
});
