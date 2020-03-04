/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { fromPx, toPx } from '../utils';

export default function TypographyControls( {
	typography: { fontSize, fontScale, lineHeight, fontWeight },
	setTypography,
} ) {
	return (
		<PanelBody title={ __( 'Typography' ) } initialOpen={ false }>
			<RangeControl
				label={ __( 'Font Size' ) }
				value={ fromPx( fontSize ) }
				min={ 10 }
				max={ 30 }
				step={ 1 }
				onChange={ ( value ) =>
					setTypography( { fontSize: toPx( value ) } )
				}
			/>
			<RangeControl
				label={ __( 'Font Scale' ) }
				value={ fontScale }
				min={ 1.1 }
				max={ 1.4 }
				step={ 0.025 }
				onChange={ ( value ) => setTypography( { fontScale: value } ) }
			/>
			<RangeControl
				label={ __( 'Line Height' ) }
				value={ lineHeight }
				min={ 1 }
				max={ 2 }
				step={ 0.1 }
				onChange={ ( value ) => setTypography( { lineHeight: value } ) }
			/>
			<RangeControl
				label={ __( 'Font Weight' ) }
				value={ fontWeight }
				min={ 100 }
				max={ 900 }
				step={ 100 }
				onChange={ ( value ) => setTypography( { fontWeight: value } ) }
			/>
		</PanelBody>
	);
}