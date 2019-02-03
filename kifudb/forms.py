from django import forms


class SearchForm(forms.Form):
    first_player = forms.CharField(label='First player', required=False)
    second_player = forms.CharField(label='Second player', required=False)
    # first_player = forms.CharField(label='First player', max_length=100)
    description = forms.CharField(label='Description', required=False)
