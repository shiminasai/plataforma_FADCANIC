(function($) {	
	$(document).ready(function(){
		var valor_tipo = $('#id_tipo').val();
			if (valor_tipo == '1' ) {
				$('.field-nombre').show();
				$('.field-departamento').show();
				$('.field-municipio').show();
				$('.field-persona_contacto').show();
				$('.field-direccion').show();
				$('.field-celular_1').hide();
				$('.field-convencional_1').hide();
				$('.field-correo').show();
				$('.field-web').hide();
				$('.field-facebook').hide();
				$('.field-twitter').hide();
				$('.field-youtube').hide();
				$('.field-otro').hide();
				$('.field-cobertura').show();
				$('.field-acciones_violencia').show();
				$('.field-acciones_apoyo').hide();
				$('.field-comunidad').hide();
				$('.field-masculino').hide();
				$('.field-femenino').hide();
				$('.field-integrantes').hide();
				$('.field-mayor_13').hide();
				$('.field-mayor_19').hide();
				$('.field-mayor_30').hide();
				$('.field-cantidad_org').show();
				$('#info_organizaciones_set-group').show();
				
			
			}else if (valor_tipo != '1'){
				$('.field-persona_contacto').hide();
				$('.field-direccion').hide();
				$('.field-celular_1').hide();
				$('.field-convencional_1').hide();
				$('.field-correo').hide();
				$('.field-web').hide();
				$('.field-facebook').hide();
				$('.field-twitter').hide();
				$('.field-youtube').hide();
				$('.field-otro').hide();
				$('.field-cobertura').hide();
				$('.field-acciones_apoyo').show();
				$('.field-comunidad').show();
				$('.field-masculino').show();
				$('.field-femenino').show();
				$('.field-integrantes').show();
				$('.field-mayor_13').show();
				$('.field-mayor_19').show();
				$('.field-mayor_30').show();
				$('.field-cantidad_org').hide();
				$('#info_organizaciones_set-group').hide();
			};
			
		$('#id_tipo').change(function(){
			var valor_tipo = $('#id_tipo').val();
			if (valor_tipo == '1' ) {
				$('.field-nombre').show();
				$('.field-departamento').show();
				$('.field-municipio').show();
				$('.field-persona_contacto').show();
				$('.field-direccion').show();
				$('.field-celular_1').hide();
				$('.field-convencional_1').hide();
				$('.field-correo').show();
				$('.field-web').hide();
				$('.field-facebook').hide();
				$('.field-twitter').hide();
				$('.field-youtube').hide();
				$('.field-otro').hide();
				$('.field-cobertura').show();
				$('.field-acciones_violencia').show();
				$('.field-acciones_apoyo').hide();
				$('.field-comunidad').hide();
				$('.field-masculino').hide();
				$('.field-femenino').hide();
				$('.field-integrantes').hide();
				$('.field-mayor_13').hide();
				$('.field-mayor_19').hide();
				$('.field-mayor_30').hide();
				$('.field-cantidad_org').show();
				$('#info_organizaciones_set-group').show();
			
			}else if (valor_tipo != '1'){
				$('.field-persona_contacto').hide();
				$('.field-direccion').hide();
				$('.field-celular_1').hide();
				$('.field-convencional_1').hide();
				$('.field-correo').hide();
				$('.field-web').hide();
				$('.field-facebook').hide();
				$('.field-twitter').hide();
				$('.field-youtube').hide();
				$('.field-otro').hide();
				$('.field-cobertura').hide();
				$('.field-acciones_apoyo').show();
				$('.field-comunidad').show();
				$('.field-masculino').show();
				$('.field-femenino').show();
				$('.field-integrantes').show();
				$('.field-mayor_13').show();
				$('.field-mayor_19').show();
				$('.field-mayor_30').show();
				$('.field-cantidad_org').hide();
				$('#info_organizaciones_set-group').hide();
			};
		});

	})
})(jQuery || django.jQuery);