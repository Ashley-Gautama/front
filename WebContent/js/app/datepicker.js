    $(document).ready(function(){
        var date_input=$('input[name="date"]');
        date_input.datepicker({
            format: 'mm/dd/yyyy',
            todayHighlight: true,
            autoclose: true,
        })
    })
