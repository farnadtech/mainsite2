import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cycleIndex,
  getContinuousRollerOffset,
  getRelativeProjectOffset,
  validateConsultationForm,
  CLIENT_PROJECTS,
  ECOSYSTEM_SERVICES,
  FAQ_ITEMS,
  PRICING_PLANS,
} from './farnad-data';

test('cycleIndex wraps cleanly forward and backward', () => {
  assert.equal(cycleIndex(0, -1, 3), 2);
  assert.equal(cycleIndex(2, 1, 3), 0);
  assert.equal(cycleIndex(1, 1, 3), 2);
});

test('getRelativeProjectOffset centers active index across 7 projects', () => {
  assert.equal(getRelativeProjectOffset(3, 3, 7), 0);
  assert.equal(getRelativeProjectOffset(2, 3, 7), -1);
  assert.equal(getRelativeProjectOffset(4, 3, 7), 1);
  assert.equal(getRelativeProjectOffset(0, 6, 7), 1);
  assert.equal(getRelativeProjectOffset(6, 0, 7), -1);
});

test('getContinuousRollerOffset wraps continuously across negative and positive positions', () => {
  assert.equal(getContinuousRollerOffset(3, 3, 7), 0);
  assert.ok(Math.abs(getContinuousRollerOffset(0, 6.75, 7) - 0.25) < 1e-9);
  assert.ok(Math.abs(getContinuousRollerOffset(6, -0.25, 7) - -0.75) < 1e-9);
  assert.ok(Math.abs(getContinuousRollerOffset(1, 10.5, 7) - -2.5) < 1e-9);
});

test('validateConsultationForm rejects empty or invalid contact', () => {
  const emptyResult = validateConsultationForm({
    fullName: '',
    contact: '',
    service: '',
    notes: '',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.fullName);
  assert.ok(emptyResult.errors.contact);
  assert.ok(emptyResult.errors.service);

  const badContact = validateConsultationForm({
    fullName: 'Ali',
    contact: 'invalid',
    service: 'SEO',
    notes: '',
  });
  assert.equal(badContact.valid, false);
  assert.ok(badContact.errors.contact);
});

test('validateConsultationForm accepts valid email or phone', () => {
  const emailOk = validateConsultationForm({
    fullName: 'Mehdi Karimi',
    contact: 'mehdi@idg.example',
    service: 'Website Design & Development',
    notes: 'Corporate redesign',
  });
  assert.equal(emailOk.valid, true);

  const phoneOk = validateConsultationForm({
    fullName: 'Sara Ahmadi',
    contact: '+98 21 4456 7890',
    service: 'Mobile App Development',
    notes: '',
  });
  assert.equal(phoneOk.valid, true);
});

test('domain datasets match expected counts', () => {
  assert.equal(ECOSYSTEM_SERVICES.length, 6);
  assert.equal(CLIENT_PROJECTS.length, 7);
  assert.equal(PRICING_PLANS.length, 3);
  assert.ok(FAQ_ITEMS.length >= 5);
  for (const item of FAQ_ITEMS) {
    assert.ok(item.id.length > 0);
    assert.ok(item.question.length > 10);
    assert.ok(item.answer.length > 20);
  }
});

test('validateContactPageForm validates email, phone, and project message', async () => {
  const { validateContactPageForm, TEAM_MEMBERS, COMPANY_VALUES, COMPANY_MILESTONES } = await import(
    './farnad-data'
  );
  assert.ok(TEAM_MEMBERS.length >= 4);
  assert.ok(COMPANY_VALUES.length >= 4);
  assert.ok(COMPANY_MILESTONES.length >= 4);

  const invalid = validateContactPageForm({
    fullName: '',
    email: 'bademail',
    phone: '123',
    service: '',
    budget: '',
    timeline: '',
    message: 'short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.service);
  assert.ok(invalid.errors.message);

  const valid = validateContactPageForm({
    fullName: 'Farhad Naderi',
    email: 'farhad@example.com',
    phone: '+98 912 345 6789',
    service: 'Website Design & Development',
    budget: '$3,000 - $7,000',
    timeline: '1 Month',
    message: 'We need a bespoke multi-language portal with custom booking.',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('getServiceExtendedData returns full website-design packages and fallback services', async () => {
  const { getServiceExtendedData } = await import('./farnad-data');
  const web = getServiceExtendedData('website-design');
  assert.equal(web.id, 'website-design');
  assert.ok(web.packages.length >= 3);
  assert.ok(web.features.length >= 6);
  assert.ok(web.process.length >= 5);
  assert.ok(web.faqs.length >= 5);

  const mobile = getServiceExtendedData('mobile-app');
  assert.equal(mobile.id, 'mobile-app');
  assert.ok(mobile.features.length > 0);
  assert.ok(mobile.packages.length > 0);
});


