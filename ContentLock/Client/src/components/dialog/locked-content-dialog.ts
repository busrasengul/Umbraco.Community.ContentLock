import { css, customElement, html, LitElement, property, query } from '@umbraco-cms/backoffice/external/lit';

@customElement('locked-content-dialog')
export class LockedContentDialog extends LitElement {

    // Pass in a name of a person who has locked the content
    @property({ type: String })
    lockedBy = '';

    @query('#locked-modal')
    dialogEl!: HTMLDialogElement;

    openDialog() {
        this.dialogEl?.showModal();
    }

    closeDialog() {
        this.dialogEl?.close();
    }

    render() {
        return html`
            <dialog id="locked-modal">
                <uui-dialog-layout headline="Content Lock - This page is locked">
                    <p>This page is currently locked by <strong>${this.lockedBy}</strong></p>

                    <!-- SVG -->
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 96" width="90" height="96" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_136"><rect width="90" height="96" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_136)"><g transform="matrix(0.9993870854377747,0.03500664234161377,-0.03500664234161377,0.9993870854377747,1.1485595703125,-2.4722518920898438)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,25.979999542236328,84.48400115966797)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="4" d=" M0,4.060999870300293 C0,4.060999870300293 0,4.060999870300293 0,4.060999870300293 C-3.055000066757202,4.060999870300293 -5.531000137329102,1.5839999914169312 -5.531000137329102,-1.4700000286102295 C-5.531000137329102,-1.4700000286102295 -5.531000137329102,-4.060999870300293 -5.531000137329102,-4.060999870300293 C-5.531000137329102,-4.060999870300293 5.531000137329102,-4.060999870300293 5.531000137329102,-4.060999870300293 C5.531000137329102,-4.060999870300293 5.531000137329102,-1.4700000286102295 5.531000137329102,-1.4700000286102295 C5.531000137329102,1.5839999914169312 3.055000066757202,4.060999870300293 0,4.060999870300293z"></path></g><g opacity="1" transform="matrix(1,0,0,1,45.21200180053711,45.21099853515625)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M22.76799964904785,26.56599998474121 C22.76799964904785,26.56599998474121 -22.76799964904785,26.56599998474121 -22.76799964904785,26.56599998474121 C-24.865999221801758,26.56599998474121 -26.56599998474121,24.864999771118164 -26.56599998474121,22.76799964904785 C-26.56599998474121,22.76799964904785 -26.56599998474121,-22.767000198364258 -26.56599998474121,-22.767000198364258 C-26.56599998474121,-24.864999771118164 -24.865999221801758,-26.56599998474121 -22.76799964904785,-26.56599998474121 C-22.76799964904785,-26.56599998474121 22.76799964904785,-26.56599998474121 22.76799964904785,-26.56599998474121 C24.865999221801758,-26.56599998474121 26.56599998474121,-24.864999771118164 26.56599998474121,-22.767000198364258 C26.56599998474121,-22.767000198364258 26.56599998474121,22.76799964904785 26.56599998474121,22.76799964904785 C26.56599998474121,24.864999771118164 24.865999221801758,26.56599998474121 22.76799964904785,26.56599998474121z"></path></g><g opacity="1" transform="matrix(1,0,0,1,45.21200180053711,45.21099853515625)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="4" d=" M24.18400001525879,35.21200180053711 C24.18400001525879,35.21200180053711 -24.18400001525879,35.21200180053711 -24.18400001525879,35.21200180053711 C-30.27400016784668,35.21200180053711 -35.21200180053711,30.274999618530273 -35.21200180053711,24.18400001525879 C-35.21200180053711,24.18400001525879 -35.21200180053711,-24.18400001525879 -35.21200180053711,-24.18400001525879 C-35.21200180053711,-30.27400016784668 -30.27400016784668,-35.21200180053711 -24.18400001525879,-35.21200180053711 C-24.18400001525879,-35.21200180053711 24.18400001525879,-35.21200180053711 24.18400001525879,-35.21200180053711 C30.27400016784668,-35.21200180053711 35.21200180053711,-30.27400016784668 35.21200180053711,-24.18400001525879 C35.21200180053711,-24.18400001525879 35.21200180053711,24.18400001525879 35.21200180053711,24.18400001525879 C35.21200180053711,30.274999618530273 30.27400016784668,35.21200180053711 24.18400001525879,35.21200180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,64.44499969482422,84.48400115966797)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="4" d=" M0,4.060999870300293 C0,4.060999870300293 0,4.060999870300293 0,4.060999870300293 C3.055000066757202,4.060999870300293 5.531000137329102,1.5839999914169312 5.531000137329102,-1.4700000286102295 C5.531000137329102,-1.4700000286102295 5.531000137329102,-4.060999870300293 5.531000137329102,-4.060999870300293 C5.531000137329102,-4.060999870300293 -5.531000137329102,-4.060999870300293 -5.531000137329102,-4.060999870300293 C-5.531000137329102,-4.060999870300293 -5.531000137329102,-1.4700000286102295 -5.531000137329102,-1.4700000286102295 C-5.531000137329102,1.5839999914169312 -3.055000066757202,4.060999870300293 0,4.060999870300293z"></path></g><g opacity="0" transform="matrix(1,0,0,1,27.368999481201172,26.843000411987305)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M4.085000038146973,-3.9749999046325684 C0.8050000071525574,-1.9550000429153442 -1.975000023841858,0.7549999952316284 -4.085000038146973,3.9749999046325684"></path></g></g><g transform="matrix(0.38588765263557434,0.9225457906723022,-0.9225457906723022,0.38588765263557434,60.1701774597168,6.710078716278076)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,19.114999771118164,19.1200008392334)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M-6.164999961853027,6.170000076293945 C-4.835000038146973,0 -0.004999999888241291,-4.840000152587891 6.164999961853027,-6.170000076293945"></path></g><g opacity="1" transform="matrix(1,0,0,1,38.34000015258789,38.34000015258789)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M-6.170000076293945,6.170000076293945 C-0.009999999776482582,4.840000152587891 4.829999923706055,-0.009999999776482582 6.170000076293945,-6.170000076293945"></path></g><g opacity="1" transform="matrix(1,0,0,1,19.114999771118164,38.34000015258789)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M-6.164999961853027,-6.170000076293945 C-4.835000038146973,-0.009999999776482582 0.004999999888241291,4.840000152587891 6.164999961853027,6.170000076293945"></path></g><g opacity="1" transform="matrix(1,0,0,1,38.34000015258789,19.1200008392334)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M-6.170000076293945,-6.170000076293945 C0,-4.840000152587891 4.829999923706055,0 6.170000076293945,6.170000076293945"></path></g><g opacity="1" transform="matrix(1,0,0,1,28.725000381469727,28.726999282836914)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M6.631999969482422,-0.0010000000474974513 C6.631999969482422,3.6619999408721924 3.6619999408721924,6.631999969482422 -0.0010000000474974513,6.631999969482422 C-3.6630001068115234,6.631999969482422 -6.631999969482422,3.6619999408721924 -6.631999969482422,-0.0010000000474974513 C-6.631999969482422,-3.6640000343322754 -3.6630001068115234,-6.631999969482422 -0.0010000000474974513,-6.631999969482422 C3.6619999408721924,-6.631999969482422 6.631999969482422,-3.6640000343322754 6.631999969482422,-0.0010000000474974513z"></path></g><g opacity="1" transform="matrix(1,0,0,1,28.725000381469727,28.729999542236328)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(57,64,66)" stroke-opacity="1" stroke-width="3" d=" M-5.945000171661377,2.930000066757202 C-9.854999542236328,3.259999990463257 -13.774999618530273,3.440000057220459 -17.684999465942383,3.4700000286102295 C-19.635000228881836,3.490000009536743 -21.225000381469727,1.940000057220459 -21.225000381469727,0 C-21.225000381469727,-1.9500000476837158 -19.635000228881836,-3.5 -17.684999465942383,-3.4800000190734863 C-13.774999618530273,-3.440000057220459 -9.854999542236328,-3.259999990463257 -5.945000171661377,-2.930000066757202 M2.924999952316284,5.940000057220459 C2.924999952316284,5.940000057220459 2.924999952316284,5.949999809265137 2.924999952316284,5.949999809265137 C3.255000114440918,9.869999885559082 3.444999933242798,13.770000457763672 3.4749999046325684,17.68000030517578 C3.494999885559082,19.6299991607666 1.9450000524520874,21.229999542236328 0.004999999888241291,21.229999542236328 C-1.9450000524520874,21.229999542236328 -3.494999885559082,19.6299991607666 -3.4749999046325684,17.68000030517578 C-3.444999933242798,13.770000457763672 -3.255000114440918,9.869999885559082 -2.924999952316284,5.949999809265137 C-2.924999952316284,5.949999809265137 -2.924999952316284,5.940000057220459 -2.924999952316284,5.940000057220459 M2.924999952316284,-5.940000057220459 C2.924999952316284,-5.940000057220459 2.924999952316284,-5.949999809265137 2.924999952316284,-5.949999809265137 C3.255000114440918,-9.869999885559082 3.444999933242798,-13.770000457763672 3.4749999046325684,-17.690000534057617 C3.494999885559082,-19.639999389648438 1.9450000524520874,-21.229999542236328 0.004999999888241291,-21.229999542236328 C-1.9450000524520874,-21.229999542236328 -3.494999885559082,-19.639999389648438 -3.4749999046325684,-17.690000534057617 C-3.444999933242798,-13.770000457763672 -3.255000114440918,-9.869999885559082 -2.924999952316284,-5.949999809265137 C-2.924999952316284,-5.949999809265137 -2.924999952316284,-5.940000057220459 -2.924999952316284,-5.940000057220459 M5.945000171661377,-2.930000066757202 C9.864999771118164,-3.259999990463257 13.774999618530273,-3.440000057220459 17.684999465942383,-3.4800000190734863 C19.635000228881836,-3.5 21.225000381469727,-1.9500000476837158 21.225000381469727,0 C21.225000381469727,1.940000057220459 19.635000228881836,3.490000009536743 17.684999465942383,3.4700000286102295 C13.774999618530273,3.440000057220459 9.864999771118164,3.259999990463257 5.945000171661377,2.930000066757202"></path></g></g></g></svg>

                    <uui-button slot="actions" @click=${this.closeDialog}>Close</uui-button>
                </uui-dialog-layout>
            </dialog>
        `;
    }

    static styles = css`
        dialog {
            border: none;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        dialog::backdrop {
            background-color: rgba(0, 0, 0, 0.2);
        }
    `;
}

export default LockedContentDialog;