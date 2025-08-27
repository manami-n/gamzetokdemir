<template>
    <div class="content-width">
        <!-- h2 -->
        <h2><span class="marker">{{ $t("contact.h2") }}</span></h2>
        <p class="info">{{ $t('contact.info') }}</p>
        
        <form id="contactForm" @submit="sendEmail">
            <!-- Short inputs -->
            <fieldset>
                <div>
                    <label for="thename">{{ $t('contact.form.name') }} <span class="req">*{{ $t('contact.form.mandatory') }}</span></label>
                    <p class="invalid" id="invalidName">{{ $t('contact.form.invalidName') }}</p>
                    <input type="text" name="thename" id="thename" maxlength="50">
                </div>
                <div>
                    <label for="email">{{ $t('contact.form.email') }} <span class="req">*{{ $t('contact.form.mandatory') }}</span></label>
                    <p class="invalid" id="invalidEmail">{{ $t('contact.form.invalidEmail') }}</p>
                    <input type="email" name="email" id="email" size="50" maxlength="50">
                </div>
                <div>
                    <label for="email2">{{ $t('contact.form.email2') }} <span class="req">*{{ $t('contact.form.mandatory') }}</span></label>
                    <p class="invalid" id="invalidEmail2">{{ $t('contact.form.invalidEmail2') }}</p>
                    <input type="text" name="email2" id="email2" size="50" maxlength="50">
                </div>
                <div>
                    <label for="phone">{{ $t('contact.form.phone') }}</label>
                    <p class="invalid" id="invalidPhone">{{ $t('contact.form.invalidPhone') }}</p>
                    <input type="text" name="phone" id="phone" size="64" maxlength="20">
                </div>
            </fieldset>
            <!-- Textboxes -->
            <fieldset>
                <div>
                    <label for="message">{{ $t('contact.form.message') }} <span class="req">*{{ $t('contact.form.mandatory') }}</span></label>
                    <p class="invalid" id="invalidMessage">{{ $t('contact.form.invalidMessage') }}</p>
                    <textarea name="message" id="message" :placeholder="$t('contact.form.messagePlace')"></textarea>
                </div>
                <div>
                    <label for="goal">{{ $t('contact.form.goals') }}</label>
                    <textarea name="goal" id="goal" :placeholder="$t('contact.form.goalsPlace')"></textarea>
                </div>
                <div>
                    <label for="additional">{{ $t('contact.form.additional') }}</label>
                    <textarea name="additional" id="additional" :placeholder="$t('contact.form.additionalPlace')"></textarea>
                </div>
            </fieldset>
            <!-- submit -->
            <div>
                <button type="submit">{{ $t('contact.form.submit') }}</button>
            </div>
        </form>
    </div>
</template>
